export enum LinkType {
    None = 0,
    NewReply,
    Profile,
    Section,
    Thread,
    Index,
}

export function getLinkType(url: string = location.href): LinkType {
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
    return LinkType.None
}
