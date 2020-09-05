import { ThreadData, User } from "../classes"
import { LinkType } from '../enums'

export function getThreadInfo(): ThreadData {
    const threadTitle: string[] = document.title.split('-')
    threadTitle.pop()
    return new ThreadData(threadTitle.join('-').trim(), getThreadIdFromUrl(location.href))
}

export function getLinkType(url: string = location.href) {
    if (url.match(/\/profile[/]?$|profile\?uid=[0-9]+/)) {
        return LinkType.Profile
    } else if (url.match(/\/newreply/g)) {
        return LinkType.NewReply
    } else if (url.match(/forum\/t\/[0-9]+/)) {
        return LinkType.Thread
    } else if (url.match(/forum\/[A-z]+/)) {
        return LinkType.Section
    } else if (url.match(/forum[/]?/)) {
        return LinkType.Index
    }
}

export function getThreadIdFromUrl(url: string = location.href): number {
    return parseInt(url.match(/\/([0-9]+)/)[1])
}

export function getUsername(): string { 
    return document.querySelector('.navItem > p[title*="Account"]')?.textContent
}

export function getLocalUserId(): number {
    return parseInt((document.querySelector('#info>p>a[href*=rate]') as HTMLAnchorElement).href.match(/[0-9]+/)[0])
}

export function getUserInfoFromTag(tag: HTMLAnchorElement): User {
    return new User(tag.textContent, parseInt(tag.href.match(/=([0-9]+)/)[1]))
}

export function copyText(text: string): void {
    const temp_input = document.createElement('input')
    temp_input.value = text
    document.body.appendChild(temp_input)
    temp_input.select()
    temp_input.setSelectionRange(0, 99999)
    document.execCommand('copy')
    temp_input.remove()
}