import type { MentionButton, MentionMembers } from "./@types/declaration"

export function webpage_getMentions() {
    return document.querySelectorAll<MentionButton>("a.btnmention")
}

export function thread_getContentBodies(reply: MentionMembers["replyCard"], isExpectingInnerHTML = false) {
    const bodies: string[] = []
    if (reply != null) {
        for (const body of reply.querySelectorAll(".thread_replycontent")) {
            if (body.textContent != null) {
                if (isExpectingInnerHTML) {
                    bodies.push(body.innerHTML)
                } else {
                    bodies.push(body.textContent)
                }
            }
        }
    }
    return bodies
}

export function mention_getMembers(mention: MentionButton) {
    const members: MentionMembers = { profileLink: null, replyCard: null }
    const profileLink = <HTMLAnchorElement>mention.parentNode?.querySelector("a[href*=profile]")
    const replyCard = <HTMLDivElement>mention.parentNode?.parentNode?.parentNode //?.querySelector<HTMLDivElement>("div.replygroup")
    if (profileLink != null) members.profileLink = profileLink
    if (replyCard != null) members.replyCard = replyCard
    return members
}

export function mention_getOwnerContents(mention: MentionButton, isExpectingInnerHTML = false) {
    return thread_getContentBodies(mention_getMembers(mention).replyCard, isExpectingInnerHTML)
}

export function mention_getOwnerUserName(mention: MentionButton) {
    return mention_getMembers(mention).profileLink?.textContent
}
