import { GetThreadInfoFromAnchorTag, MakeUserFromAnchorTag } from './utils'
import { getLinkType } from '../utils'
import { SearchResults, ThreadData, User } from '../classes'
import { LinkType } from '../enums'

const cached: any = {}

//TODO: Rename function
export function searchThreadSync(): SearchResults {
    const currentLinkType = getLinkType(location.href)
    if (currentLinkType === LinkType.SECTION) {
        if (cached.searchResults) {
            return cached.searchResults
        } else {
            const ForumContainer = document.querySelector("div.forumcontainer > table")
            const ThreadList = new SearchResults()
            if (ForumContainer) {
                const IndexSkip = ForumContainer.querySelector("thead>tr").children.length - 5
                ForumContainer.querySelectorAll("tbody>tr").forEach(row => {
                    const RowChildren = row.children
                    const ThreadMeta = RowChildren[IndexSkip + 1]
                    const ThreadLink = ThreadMeta.children[0] as HTMLAnchorElement
                    const ThreadAuthorMeta = ThreadMeta.children[1]
                    const ThreadAuthorLink = ThreadAuthorMeta.children[0] as HTMLAnchorElement
                    const ThreadReplies = RowChildren[IndexSkip + 2]
                    const ThreadViews = RowChildren[IndexSkip + 3]
                    const ThreadLastReplierMeta = RowChildren[IndexSkip + 4]
                    const ThreadLastReplierLink = ThreadLastReplierMeta.children[0] as HTMLAnchorElement

                    const BasicThreadData = GetThreadInfoFromAnchorTag(ThreadLink)
                    const BasicAuthorData = MakeUserFromAnchorTag(ThreadAuthorLink)
                    const BasicReplierData = ThreadLastReplierLink ? MakeUserFromAnchorTag(ThreadLastReplierLink) : new User('undefined')
                    let threadSection: string | string[] | HTMLAnchorElement

                    if (location.href.match(/[\/]all/)) {
                        threadSection = RowChildren[0].children[0] as HTMLAnchorElement
                        if (threadSection) {
                            threadSection = threadSection.href.split("/").reverse()[0]
                        } else {
                            threadSection = null
                        }
                    } else {
                        threadSection = document.title.split('-')
                        threadSection.pop()
                        threadSection = threadSection.join('-').trim()
                    }

                    ThreadList.Add(new ThreadData(BasicThreadData.Name, BasicThreadData.Id,
                        ThreadReplies.textContent, ThreadViews.textContent,
                        BasicAuthorData, BasicReplierData, threadSection as string))
                })
            }
            cached.searchResults = ThreadList
            return ThreadList
        }
    }
}