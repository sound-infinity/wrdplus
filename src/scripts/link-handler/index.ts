import { getLinkType, LinkType, parseTags, Popup, searchThreadAsync, getThreadIdFromUrl, searchThreadsAsync, SearchResults, getUsername, getThreadInfo, dialogs } from "../../modules/wrd-lib"
import { Info, DataStorage as DS, LastestThreads as LT } from "../globals"
import { UpdateThreads, ThreadStates } from "./thread-markings"
import { OtherSettings } from "../settings"

try {
    require ('./thread-highlight')
} catch (x) {}

switch (getLinkType()) {
    case LinkType.Thread:
        parseTags()
        const LocalThread = getThreadInfo()
                
        searchThreadAsync(LocalThread.Name).then((searchResults: SearchResults) => {
            const ThreadData = searchResults.getThreadById(LocalThread.Id)
            if (ThreadData) {
                DS.setKey(ThreadData.Id, ThreadData)
            } else if (OtherSettings.getCheckboxValue('devmode')) {
                dialogs.showinfo({
                    title: 'Thread Data',
                    description: 'The query sent for this thread gave no results.'
                })
            }
        })
        break
    case LinkType.Profile:
        parseTags()
        break;
    case LinkType.Section:
        UpdateThreads()
        break
    case LinkType.Index:
        const names = [""]
        document.querySelectorAll('a[href*="/forum/t"').forEach((thread: HTMLAnchorElement) => {
            thread.setAttribute("state", ThreadStates.Waiting)
            if (DS.getKey(getThreadIdFromUrl(thread.href))) {
                names.push(thread.textContent.trim())
            }
        })

        searchThreadsAsync(names).then(searchResults => {
            LT.Migrate(searchResults)
            UpdateThreads()
        })
        break
    default:
        if (OtherSettings.getCheckboxValue('devmode')) {
            dialogs.showinfo({
                title: 'LinkTypes',
                description: 'No link type found for this page'
            })
        }
        break
}
