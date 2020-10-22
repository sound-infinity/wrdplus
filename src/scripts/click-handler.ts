import { User, ThreadData, searchThreadAsync, getThreadIdFromUrl, dialogs, Popup } from '../modules/wrd-lib'
import { LatestThreads as LT, DataStorage } from './globals'
import { getThreadStateById } from './link-handler/thread-markings'

function makeUserLink(user: User) {
    return `<a href="${user.profileUrl}">${user.toString()}</a>`
}

function showDataOnPopup(popup: Popup, threadData: ThreadData) {
    const {Name, Views, Replies, Author, LastReplier, Id} = threadData

    popup.description = [
        `Title: ${Name}`, `Views: ${Views}`,
        `Replies: ${Replies}`, `Author: ${makeUserLink(Author)}`,
        `Last Reply: ${(LastReplier ? makeUserLink(LastReplier) : "None")}`,
        `Read status: ${getThreadStateById(Id)}`,
        '<hr/>',
    ]

    popup.addButton("Visit", () => {
        console.log("Using V2")
    })

    popup.show()
}

addEventListener('click', ev => {
    const target = ev.target as HTMLAnchorElement
    if (target != null) {
        if (target.tagName === 'A' && LT != null) {
            const threadData = LT.getThreadById(getThreadIdFromUrl(target.href))
            const popup = dialogs.showpopup({
                title: "Thread Data",
                description: "Working...",
                isHidden: true
            })

            if (threadData != null) {
                //#region Found ThreadData Locally
                DataStorage.setKey(threadData.Id, threadData)
                if (ev.ctrlKey) {
                    showDataOnPopup(popup, threadData)

                    ev.preventDefault()
                }
                //#endregion Found ThreadData Locally
            } else if (ev.ctrlKey) {
                //#region Alternative Actions
                ev.preventDefault()
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
                //#endregion Alternative Actions
            } else {
                popup.remove()
            }
        }
    }
})