import { getLinkType, LinkType, User, ThreadData, searchThreadAsync, getThreadIdFromUrl, ButtonData } from '../modules/wrd-lib'
import { LastestThreads as LT, DataStorage as DS, Info } from './globals'
import { UpdateThreads, getThreadStateById } from './link-handler/thread-markings'

function makeAnchorForUser(user: User) {
    return `<a href="${user.profileUrl}">${user.toString()}</a>`
}

function showThreadData(threadData: ThreadData) {
    Info.description = [
        "Title: " + threadData.Name,
        "Views: " + threadData.Views,
        "Replies: " + threadData.Replies,
        "Author: " + makeAnchorForUser(threadData.Author),
        "Last Reply: " + (threadData.LastReplier ? makeAnchorForUser(threadData.LastReplier) : "None"),
        'Read status: ' + getThreadStateById(threadData.Id),
        '<hr/>',
    ]
    Info.buttons = {
        Visit: new ButtonData(() => {
            location.href = threadData.Url
        })
    }
    Info.show()
}

addEventListener('click', (e: any)  => {
    if (e.target) {
        if (e.target.tagName === 'A' && LT != null) {
            if (getLinkType(e.target.href) === LinkType.Thread) {
                const threadData = LT.getThreadById(parseInt(e.target.href.match(/t\/([0-9]+)/)[1]))
                Info.title = 'Thread Data'
                if (threadData) {
                    DS.setKey(threadData.Id, threadData)
                    if (e.ctrlKey) {
                        showThreadData(threadData)
                        e.preventDefault()
                    }
                } else if (e.ctrlKey) {
                    Info.reset()
                    Info.description = "Thread data not found within database."
                    Info.buttons = {
                        'Search Async': new ButtonData(function () {
                            Info.description = 'fetching...'
                            Info.buttons = {}
                            searchThreadAsync(e.target.innerText).then(results => {
                                Info.description = `Search gave ${results.collection.length} result(s).`
                                if (results.collection.length < 1){
                                    setTimeout(function(){Info.close()}, 1000)
                                } else {
                                    setTimeout(showThreadData.bind(undefined, results.getThreadById(getThreadIdFromUrl(e.target.href))), 1000)
                                }
                            })
                        }),
                        Visit: new ButtonData(function () {
                            e.target.click()
                        }),
                        Close: new ButtonData(function () {
                            this.close()
                        }),
                    }
                    Info.show()
                    e.preventDefault()
                }

                if (getLinkType() !== LinkType.Thread) UpdateThreads()
            }
        }
    }
})