import { ThreadData, ThreadQuery, User, SearchResults, LinkType } from "./data-types"
const cached = {}
// https://wearedevs.net/forum/all?order=latestthread&search=
const QueryEndpoint = `http://localhost:8080/build/test.html`
//const QueryEndpoint = 'https://wearedevs.net/forum/all?order=latestthread&search=$name'

const Regexes = {
    ExtractTableHeadAndBody: /<thead>([\s\S]*?)<\/thead>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/,
    TableContents: /<table>([\s\S]*?)<\/table>/,
    RemoveTags: /<script.*?<\/script>|<style.*?<\/style>/g,
    RemoveNewLines: /[\r\n]+\s+/g,
    TableRow: /<tr>(.*?)<\/tr>/g
}

/**
 * 
 * @param {Element} anchorTag
 * @returns {User} 
 */
function MakeUserFromAnchorTag(anchorTag) {
    if (anchorTag.href) {
        return new User(anchorTag.textContent.trim(), anchorTag.href.match(/\?uid=([0-9]+)/)[1])
    }
}

/**
 * 
 * @param {Element} anchorTag
 * @returns {Object} 
 */
function GetThreadInfoFromAnchorTag(anchorTag) {
    if (anchorTag.href) {
        return {
            Name: anchorTag.textContent.trim(),
            Id: anchorTag.href.match(/\/([0-9]+)/)[1]
        }
    }
}

function GetThreadsFromBodyHTML(html) {
    const [, contents] = html.replace(Regexes.RemoveTags, "").match(Regexes.TableContents)
    const [, thead, tbody] = contents.replace(Regexes.RemoveNewLines, '').match(Regexes.ExtractTableHeadAndBody)
    const searchResults = new SearchResults()
    for (let [row] of tbody.matchAll(Regexes.TableRow)) {
        try {
            const [, threadSection, threadId, threadName, threadAuthorId, threadAuthorName, threadReplies, threadViews] = row.match(/.*?<a.*?href=.\/forum\/([A-z]+).*?<a.*?href=.\/forum\/t\/([0-9]+).*?>([\s\S]+?)<\/a>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>.*?<td.*?>[\s]?([0-9]+).*?>[\s]?([0-9]+).*?<?/) // .*?href=.\/profile\?uid=([0-9]+).*?>([A-z]+)<\/a>
            let LastReplierMatch = row.replace(/<a.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/, '').match(/.*?<\/td>.*?href=.\/profile\?uid=([0-9]+).*?>(.*?)<\/a>?.*?/)
            if (LastReplierMatch) {
                LastReplierMatch = new User(LastReplierMatch[2], LastReplierMatch[1])
            }
            searchResults.Add(new ThreadData(threadName, threadId, threadReplies, threadViews, new User(threadAuthorName, threadAuthorId), LastReplierMatch, threadSection))
        } catch (x) { }
    }
    return searchResults
}

/**
 * 
 * @param {string} threadName 
 * @returns {Promise<SearchResults>}
 */
export function SearchThreadAsync(threadName) {
    const QueryRequest = QueryEndpoint.replace("$name", threadName)

    return new Promise(resolve => {
        fetch(QueryRequest)
            .then(res => res.text())
            .then(body => {
                resolve(GetThreadsFromBodyHTML(body))
            })
    })
};

/**
 * 
 * @param {string} threadName 
 * @returns {SearchResults}
 */
export function SearchThreadSync(threadName) {
    const currentLinkType = LinkType.getLinkType("http://localhost:8080/forum/all")
    if (currentLinkType == LinkType.SECTION) {
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
                    const ThreadLink = ThreadMeta.children[0]
                    const ThreadAuthorMeta = ThreadMeta.children[1]
                    const ThreadAuthorLink = ThreadAuthorMeta.children[0]
                    const ThreadViews = RowChildren[IndexSkip + 2]
                    const ThreadReplies = RowChildren[IndexSkip + 3]
                    const ThreadLastReplierMeta = RowChildren[IndexSkip + 4]
                    const ThreadLastReplierLink = ThreadLastReplierMeta.children[0]
                    const BasicThreadData = GetThreadInfoFromAnchorTag(ThreadLink)
                    const BasicAuthorData = MakeUserFromAnchorTag(ThreadAuthorLink)
                    const BasicReplierData = ThreadLastReplierLink ? MakeUserFromAnchorTag(ThreadLastReplierLink) : {}
                    ThreadList.Add(new ThreadData(BasicThreadData.Name, BasicThreadData.Id,
                        ThreadReplies.textContent, ThreadViews.textContent,
                        BasicAuthorData, BasicReplierData))
                })
            }
            cached.searchResults = ThreadList
            return ThreadList
        }
    }
}

/**
 * 
 * @param {string[]} threadNames
 * @returns {Promise<SearchResults>}
 */
export function SearchThreadsAsync(threadNames = []) {
    const searchResults = new SearchResults()
    const threadsFound = {}
    let currentIndex = -1
    let previousResults

    return new Promise(resolve => {
        function Next() {
            currentIndex++;
            const threadName = threadNames[currentIndex]

            function LookIn(threads) {
                threads.collection.forEach(threadData => {
                    threadNames.forEach(threadName2 => {
                        if (threadData.Name === threadName2 && !(threadName2 in threadsFound)) {
                            threadsFound[threadName2] = true
                            searchResults.Add(threadData)
                        }
                    })
                })

                previousResults = threads
                if (currentIndex < threadNames.length - 1) {
                    Next()
                } else {
                    resolve(searchResults)
                }
            }

            if (threadsFound[threadName]) {
                LookIn(previousResults)
            } else {
                SearchThreadAsync(threadName).then(res => {
                    LookIn(res)
                })
            }
        }

        Next()
    })
}