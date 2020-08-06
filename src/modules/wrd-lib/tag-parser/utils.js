import { TagHandlers } from './settings/'
import CheckReply from './check-reply'
import { TagData, LineData } from './classes/'

/**
 * Gets child nodes that are text types.
 * @param {Element} element
 * @returns List of text nodes. 
 */
export function GetTextOnly(element) {
    return [].reduce.call(element.childNodes, function (child0, child1) {
        return child0 + (child1.nodeType === 3 ? child1.textContent : '')
    }, '')
}

/**
 * 
 * @param {HTMLElement[]} Elements
 */
export function GetLineList(Elements) {
    const Lines = []
    for (const element of Elements) {
        Lines.push(new LineData(element, GetTextOnly(element)))
    }
    return Lines
}


/**
 * Checks for handlers for newly created tags.
 * @param {HTMLDivElement} Container 
 * @param {TagData} Tag 
 */
export function OnWrap(Container, Tag) {
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
export function CheckReplyList(replies) {
    for (const Reply of replies) {
        if (Reply.tagName && Reply.tagName === "DIV") {
            //this=checkReply
            CheckReply(Reply, OnWrap);
        }
    }
}

export default { GetTextOnly, OnWrap, CheckReplyList }