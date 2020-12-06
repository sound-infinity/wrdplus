import { getLinkType, LinkType, parseTags, searchThreadAsync, getThreadIdFromUrl, searchThreadsAsync, SearchResults, getThreadInfo, dialogs } from "../../modules/wrd-lib"
import { DataStorage as DS, LatestThreads as LT } from "../globals"
import { UpdateThreads } from "./thread-markings"
import { ExtraFeatures, OtherSettings } from "../settings"

try {
    require ('./thread-highlight')
} catch (x) {}

if (ExtraFeatures.get<boolean>("threadmarkings")) {
    switch (getLinkType()) {
        case LinkType.Thread:
            parseTags()
            const LocalThread = getThreadInfo()
            searchThreadAsync(LocalThread.Name).then((searchResults: SearchResults) => {
                const ThreadData = searchResults.getThreadById(LocalThread.Id)
                if (ThreadData) {
                    DS.setKey(ThreadData.Id, ThreadData)
                } else if (OtherSettings.get<boolean>('devmode')) {
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
            const threadAnchors = document.querySelectorAll<HTMLAnchorElement>('a[href*="/forum/t"')
            for (let i=0;i<threadAnchors.length;++i) {
                const thread = threadAnchors[i]
                if (DS.getKey(getThreadIdFromUrl(thread.href))) {
                    names.push(thread.textContent.trim())
                }
            }
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
    
}
