export { getLinkType, getThreadInfo, getThreadIdFromUrl, getUsername } from './utils'
export { searchThreadsAsync, searchThreadAsync, searchThreadSync } from './thread-searcher'
export { LinkType, PopupResponses } from './enums'
export { Section as SettingsSection, Form as SettingsForm } from './settings'
export { Notification } from './notifications'
export { ThreadData, User, SearchResults } from './classes'
export { Popup } from './dialogs'
import TagParser from './tag-parser'
import Settings from './settings'
//Loaders
import './style-sheets'

export { TagParser as parseTags, Settings }
/*
export default {
    searchThreadsAsync, searchThreadAsync, searchThreadSync, parseTags: TagParser, 
    getLinkType, getThreadInfo, getThreadIdFromUrl,
    LinkType, PopupResponses,
    ThreadData, Notification, Popup,
    Settings
}
export {
    searchThreadsAsync, searchThreadAsync, searchThreadSync, TagParser as parseTags,
    getLinkType, getThreadInfo, getThreadIdFromUrl,
    LinkType, PopupResponses,
    ThreadData, Notification, Popup, User,
    Settings
}
*/