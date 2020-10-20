import { ThreadData, User } from "../classes"
import { LinkType } from '../enums'

export function getThreadInfo(): ThreadData {
    const threadTitle: string[] = document.title.split('-')
    threadTitle.pop()
    return new ThreadData(threadTitle.join('-').trim(), getThreadIdFromUrl(location.href))
}

export function getReplyList() {
    if (getLinkType() === LinkType.Thread) {
    }
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

export function setClipboardText(text: string): void {
    const temp_input = document.createElement('input')
    temp_input.value = text
    document.body.appendChild(temp_input)
    temp_input.select()
    temp_input.setSelectionRange(0, 99999)
    document.execCommand('copy')
    temp_input.remove()
}

export function getQueries(uri: string = location.href) {
    let qs: string[]
    let qs_len: number

    const search_query: {[key:string]: string} = {}
    
    Object.defineProperty(search_query, "toString", {
        enumerable: false,
        value: function(){
            const queries: string[] = []
            for (const key in search_query) {
                queries.push(`${key}=${search_query[key]}`)
            }
            uri_obj.search = "?"+queries.join("&")
            return uri_obj.href
        }
    })

    const uri_obj: URL = new URL(uri)

    if (!uri_obj.search) {
        return search_query
    }

    qs = uri_obj.search.replace(/^\?/, '').split(/&(?:amp;)?/)
    qs_len = qs.length

    while (qs_len > 0) {
        qs_len--;
        if (!qs[qs_len]) {
            qs.splice(qs_len, 1)
            continue
        }
    }

    for (const query of qs) {
        const [key, value]: string[] = query.split("=")
        search_query[key] = value
    }
    
    return search_query
}

export function modQueryString(key: string, val: string|number, uri: string = location.href): string {
    const queries = getQueries(uri)
    queries[key] = val.toString()
    return queries.toString()
}