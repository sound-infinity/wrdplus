import { dialogs, getThreadIdFromUrl, Popup, searchThreadAsync, ThreadData, User } from '../modules/wrd-lib'
import { LatestThreads as LT, DataStorage } from './globals'
import { getThreadStateById } from './link-handler/thread-markings'

function makeUserLink(user: User) {
    return `<a href="${user.profileUrl}">${user.toString()}</a>`
}

function showDataOnPopup(popup: Popup, threadData: ThreadData) {
    popup.description = [
        "Title: " + threadData.Name,
        "Views: " + threadData.Views,
        "Replies: " + threadData.Replies,
        "Author: " + makeUserLink(threadData.Author),
        "Last Reply: " + (threadData.LastReplier ? makeUserLink(threadData.LastReplier) : "None"),
        'Read status: ' + getThreadStateById(threadData.Id),
        '<hr/>',
    ]
}

addEventListener('click', ev => {
    const target = ev.target as HTMLAnchorElement
    if (target != null) {
        if (target.tagName === 'A' && LT != null) {
            const threadData = LT.getThreadById(getThreadIdFromUrl(target.href))
            const popup = dialogs.showpopup({
                title: "Thread Data",
                description: "Working..."
            })

            if (threadData != null) {
                //#region Found ThreadData Locally
                DataStorage.setKey(threadData.Id, threadData)
                if (ev.ctrlKey) {
                    showDataOnPopup(popup, threadData)

                    popup.addButton("Visit", () => {
                        console.log("Using V2")
                    })
                    ev.preventDefault()
                }
                //#endregion Found ThreadData Locally
            } else if (ev.ctrlKey) {
                popup.reset()
                popup.description = "Thread data not found within database."
                popup.addButton("Search Async", () => {
                    popup.description = 'fetching...'
                    popup.buttons = {}
                    searchThreadAsync(target.textContent).then(results => {
                        popup.description = `Search gave ${results.collection.length} result(s).`
                        if (results.collection.length < 1){
                            setTimeout(function(){popup.hide()}, 1000)
                        } else {
                            setTimeout(showDataOnPopup.bind(undefined, popup, results.getThreadById(getThreadIdFromUrl(target.href))), 1000)
                        }
                    })
                })

                popup.addButton("Visit", () => {
                    console.log("Using V2")
                })

                popup.addButton("Close", function(){
                    this.remove()
                })
            }
        }
    }
})