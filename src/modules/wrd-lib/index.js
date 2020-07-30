import { SearchThreadsAsync, SearchThreadAsync, SearchThreadSync } from './thread-searcher/'
import { LinkType, PopupOptions, PopupResponses } from './enums/'
import { Notification } from './notifications/'
import { ThreadData } from './classes/'
import { Popup } from './dialogs/'
import TagParser from './tag-parser/'
import Settings from './settings/'
//Loaders
import './style-sheets/'
TagParser()

export function GetThreadIdFromUrl(url) {
    return parseInt(url.match(/\/([0-9]+)/)[1])
}
export default {
    SearchThreadsAsync, SearchThreadAsync, SearchThreadSync, TagParser,
    LinkType, PopupOptions, PopupResponses,
    ThreadData, Notification, Popup,
    Settings
}
export {
    SearchThreadsAsync, SearchThreadAsync, SearchThreadSync, TagParser,
    LinkType, PopupOptions, PopupResponses,
    ThreadData, Notification, Popup,
    Settings
}