import { LastestThreads as LT, DataStorage as DS } from '../globals'
import { getThreadIdFromUrl, Notification } from '../../modules/wrd-lib'
import { ThreadData } from '../../modules/wrd-lib'
import { OtherSettings } from '../settings'

export enum ThreadStates {
    Read = 'Read',
    Unread = 'Unread',
    Unknown = 'Unknown',
    Unregistered = 'Unregistered',
    Waiting = 'Waiting'
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

const Stats = {
    read: 0,
    unreads: 0,
    unknowns: 0,
    unregistered: 0,
    total: 0
}

export function UpdateThreads() {
    document.querySelectorAll('.forumcontainer a[href*="/forum/t"').forEach((thread: HTMLAnchorElement) => {
        switch (getThreadStateById(getThreadIdFromUrl(thread.href))) {
            case ThreadStates.Read:
                thread.setAttribute('state', ThreadStates.Read)
                thread.title = 'Read'
                Stats.read++
                break;
            case ThreadStates.Unregistered:
                thread.setAttribute('state', ThreadStates.Unregistered)
                thread.title = 'Unregistered'
                Stats.unregistered++
                break;
            case ThreadStates.Unread:
                thread.setAttribute('state', ThreadStates.Unread)
                thread.title = 'Unread'
                Stats.unreads++
                break;
            case ThreadStates.Unknown:
                thread.setAttribute('state', ThreadStates.Unknown)
                thread.title = 'Unknown'
                Stats.unknowns++
                break;
            default:
                break;
        }

        Stats.total++
    })
}