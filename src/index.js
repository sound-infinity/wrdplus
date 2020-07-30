// Modules
import wrdlib, { LinkType, GetThreadIdFromUrl, Popup, TagParser, Settings } from './modules/wrd-lib'
import DataManager from './modules/data-manager'

// Presets
const DM = new DataManager('wrdplus-test')


const SettingsPanel = new Settings.Form();
// KeyBind
document.addEventListener('keydown', e => {
    if (e.altKey && e.key === 's') SettingsPanel.toggle()
})
// Basic Info
const BasicInfo = SettingsPanel.addSection('Basic Info')
BasicInfo.addHeading('LocalStorage Data', 3)
const displayDMSize = DM => {
    BasicInfo.addLabel(DM.Name)
    BasicInfo.addLabel(DM.Size).style.color = 'lightblue'
}
displayDMSize(DM)
// Theme Settings
const ThemeSettings = SettingsPanel.addSection('Theme Settings')
ThemeSettings.addTextbox('themeUrl', 'CSS URL')
ThemeSettings.addSubmitButton('Save', (e) => {
    console.log(e.getValues())
})
// Style
document.head.innerHTML += `<style>a[href][read=false]{font-weight:700}a[href][read]::before{font-weight:initial;content:"";margin:4px;padding:2px 4px;font-size:10px;text-align:center;vertical-align:middle;background-color:#288228;border-radius:10px;display:inline-block}a[href][read=true]::before{content:"R"}a[href][read=false]::before{content:"U";background-color:#a82424}a[href][read=waiting]::before{content:"W";background-color:orange}</style>`

// Local Threads
let LT = wrdlib.SearchThreadSync()

//Tag Parser
if (location.hostname === 'wearedevs') TagParser.ParsePage()

function UpdateThreads() {
    document.querySelectorAll('a[href*="/forum/t"').forEach(thread => {
        const threadData = LT.GetThreadById(GetThreadIdFromUrl(thread.href))
        if (threadData) {
            const threadStoredData = DM.getKey(threadData.Id)
            if (threadStoredData) {
                if (threadData.Replies === threadStoredData.Replies) {
                    thread.setAttribute("read", true)
                    thread.title = 'Read'
                } else {
                    thread.setAttribute("read", false)
                    thread.title = 'Unread'
                }
            } else {
                thread.setAttribute("read", false)
                thread.title = 'Unregistered'
            }
        } else {
            thread.setAttribute("read", false)
            thread.title = 'Unknown'
        }
    })
}

function FormatUser(user) {
    return `${user.Name}#${user.Id}`
}

const Info = new Popup()

window.addEventListener("click", e => {
    if (e.target) {
        if (e.target.tagName === "A" && LT != null) {
            if (LinkType.getLinkType(e.target.href) === LinkType.THREAD) {
                const threadData = LT.GetThreadById(parseInt(e.target.href.match(/t\/([0-9]+)/)[1]))
                Info.title = "Thread Data"
                let showThreadData = function (threadData) {
                    Info.description = [
                        "Title: " + threadData.Name,
                        "Views: " + threadData.Views,
                        "Replies: " + threadData.Replies,
                        "Author: " + FormatUser(threadData.Author),
                        "Last Reply: " + (threadData.LastReplier ? FormatUser(threadData.LastReplier) : "None"),
                        '<hr/>',
                        `Link: <a class='btn theme2 round' href="${threadData.Url}">${threadData.Name}</a>`
                    ]
                    Info.show()
                }

                if (threadData) {
                    DM.setKey(threadData.Id, threadData)

                    if (e.ctrlKey) {
                        showThreadData(threadData)
                        e.preventDefault()
                    }
                } else if (e.ctrlKey) {
                    Info.reset()
                    Info.description = "Failed to get data. Do you want to continue?"
                    Info.buttons = {
                        Search: function () {
                            Info.buttons = {}
                            wrdlib.SearchThreadAsync(e.target.innerText).then(results => {
                                showThreadData(results.GetThreadById(GetThreadIdFromUrl(e.target.href)))
                            })
                        },
                        Yes: function () {
                            e.target.click()
                        },
                        No: function () {
                            this.close()
                        },
                    }
                    Info.show()
                    e.preventDefault()
                }
                UpdateThreads()
            }
        }
    }
})

switch (LinkType.getLinkType(location.href)) {
    case LinkType.THREAD:
        const LocalTitle = document.title.split('-')
        const LocalId = GetThreadIdFromUrl(location.href)
        LocalTitle.pop()
        wrdlib.SearchThreadAsync(LocalTitle.join("-").trim()).then(searchResults => {
            console.log(searchResults)
            const ThreadData = searchResults.GetThreadById(LocalId)
            if (ThreadData) {
                DM.setKey(ThreadData.Id, ThreadData)
            } else {
                Info.title = "Thread Data - Failure"
                Info.description = "An attempt to retrieve data about this thread gave no results. Perhaps the search query failed or was invalid. Thus, this thread will be marked as unread."
                Info.show()
            }
        })
        break
    case LinkType.SECTION:
        UpdateThreads()
        break
    case LinkType.INDEX:
        const names = [""]
        document.querySelectorAll('a[href*="/forum/t"').forEach(thread => {
            thread.setAttribute("read", "waiting")
            if (DM.getKey(GetThreadIdFromUrl(thread.href))) {
                names.push(thread.textContent.trim())
            }
        })
        wrdlib.SearchThreadsAsync(names).then(searchResults => {
            LT = searchResults
            UpdateThreads()
        })
        break
    default:
        console.log('None')
        break
}
