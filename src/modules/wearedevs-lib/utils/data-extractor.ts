export function extractUserInfoFromTag(tag: HTMLAnchorElement): UserInfo {
    const info: UserInfo = { name: null, id: null }
    if (tag != null) {
        if (tag?.textContent) info.name = tag.textContent
        if (tag?.href) {
            const matches = tag.href.match(/=([0-9]+)/)
            if (matches != null) {
                info.id = parseInt(matches[1])
            }
        }
    }
    return info
}

export function extractThreadIdFromUrl(
    url: string = location.href
): number | null {
    const matches = url.match(/\/([0-9]+)/)

    if (matches != null) return parseInt(matches[1])
    return null
}

export function getCookie(cname: string) {
    const name = cname + "="
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(";")
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}
