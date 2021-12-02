export function getUsername(): string | null {
    const element = document.querySelector('.navItem > p[title*="Account"]')
    if (element != null) {
        return element?.textContent
    }
    return null
}

export function getUserId(): string | null {
    const element = document.querySelector<HTMLAnchorElement>(
        "#info>p>a[href*=rate]"
    )
    if (element != null) {
        const uri = element?.href
        if (uri != null) {
            const matches = uri.match(/[0-9]+/)
            if (matches != null) {
                return matches[0]
            }
        }
    }
    return null
}

export class LocalUser {
    get name() {
        return getUsername()
    }
    get id() {
        return getUserId()
    }
}
