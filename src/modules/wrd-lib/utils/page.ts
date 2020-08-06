import { ThreadData } from "../classes"
import { LinkType } from '../enums'

export function getThreadInfo(): ThreadData {
    const threadTitle: string[] = document.title.split('-')
    threadTitle.pop()
    return new ThreadData(threadTitle.join('-').trim(), getThreadIdFromUrl(location.href))
}

export function getLinkType(url: string = location.href) {
    if (url.match(/\/profile|profile\?uid=[0-9]+/)) {
        return LinkType.PROFILE
    } else if (url.match(/\/newreply/g)) {
        return LinkType.NEWREPLY
    } else if (url.match(/forum\/t\/[0-9]+/)) {
        return LinkType.THREAD
    } else if (url.match(/forum\/[A-z]+/)) {
        return LinkType.SECTION
    } else if (url.match(/forum[/]?/)) {
        return LinkType.INDEX
    }
}

export function getThreadIdFromUrl(url: string = location.href): number {
    return parseInt(url.match(/\/([0-9]+)/)[1])
}

export function getUsername(){ 
    return document.querySelector('.navItem > p[title*="Account"]')?.textContent
}