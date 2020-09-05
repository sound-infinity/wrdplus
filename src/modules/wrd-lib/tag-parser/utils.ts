import { TagHandlers } from './settings'
import CheckReply from './check-reply'
import { TagData, LineData } from './classes'

/**
 * Gets child nodes that are text types.
 * @param {Element} element
 * @returns List of text nodes. 
 */
export function GetTextOnly(element: Element) {
    return [].reduce.call(element.childNodes, function (child0: any, child1: any) {
        return child0 + (child1.nodeType === 3 ? child1.textContent : '')
    }, '')
}

export function GetLineList(Elements: HTMLCollection) {
    const Lines: LineData[] = []
    for (const element of Elements as unknown as HTMLElement[]) {
        Lines.push(new LineData(element, GetTextOnly(element)))
    }
    return Lines
}


/**
 * Checks for handlers for newly created tags.
 * @param {HTMLDivElement} Container 
 * @param {TagData} Tag 
 */
export function OnWrap(Container: HTMLDivElement, Tag: TagData) {
    if (Tag.Name in TagHandlers) {
        try {
            TagHandlers[Tag.Name].call(Container, Container);
        } catch (err) {
            console.log(err);
        }
    }
}

/**
 * Goes through a list of replies.
 * @param {array} replies 
 */
export function CheckReplyList(replies: NodeListOf<HTMLDivElement>) {
    replies.forEach(reply => {
        if (reply.tagName && reply.tagName === 'DIV') {
            CheckReply(reply, OnWrap)
        }
    })
}

export default { GetTextOnly, OnWrap, CheckReplyList }