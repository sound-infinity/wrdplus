import { LastestThreads as LT, DataStorage as DS } from '../globals'
import { getThreadIdFromUrl } from '../../modules/wrd-lib'
import { ThreadData } from '../../modules/wrd-lib'

export enum ThreadStates {
    Read = 'Read',
    Unread = 'Unread',
    Unknown = 'Unknown',
    Unregistered = 'Unregistered'
}

export function getThreadStateById(threadId: number){
    const threadData: ThreadData = LT.getThreadById(threadId)
    if (threadData) {
        const threadStoredData = DS.getKey(threadData.Id)
        if (threadStoredData) {
            if (threadData.Replies === threadStoredData.Replies) {
                return ThreadStates.Read
            } else {
                return ThreadStates.Unread
            }
        } else {
            return ThreadStates.Unregistered
        }
    } else {
        return ThreadStates.Unknown
    }
}

export function UpdateThreads() {
    document.querySelectorAll('a[href*="/forum/t"').forEach((thread: HTMLAnchorElement) => {
        switch (getThreadStateById(getThreadIdFromUrl(thread.href))) {
            case ThreadStates.Read:
                thread.setAttribute('read', 'true')
                thread.title = 'Read'
                break;
            case ThreadStates.Unregistered:
                thread.setAttribute('read', 'false')
                thread.title = 'Unregistered'
            case ThreadStates.Unread:
                thread.setAttribute('read', 'false')
                thread.title = 'Unread'
            case ThreadStates.Unknown:
                thread.setAttribute('read', 'false')
                thread.title = 'Unknown'
            default:
                break;
        }
    })
}