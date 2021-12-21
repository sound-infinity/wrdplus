import { fileToHtml } from "../../../modules/wearedevs-lib/utils/converters"
import HtmlQuoteBlock from "./quote.html"
export declare type QuoteBlock = HTMLDivElement
export declare interface QuoteBlockMembers {
    htmlUsername: HTMLAnchorElement | null
    htmlContent: HTMLParagraphElement | null
}

export function createQuoteBlock() {
    // const htmlReference = document.querySelector("#replyform")
    // if (htmlReference == null || htmlReference.parentNode == null) return
    const htmlQuoteBlock = fileToHtml<QuoteBlock>(HtmlQuoteBlock)
    document.querySelector("main")?.appendChild(htmlQuoteBlock)
    //htmlReference.parentNode.appendChild(htmlQuoteBlock) //, htmlReference)
    return htmlQuoteBlock
}

export function getMembers(quoteBlock: QuoteBlock) {
    const members: QuoteBlockMembers = { htmlUsername: null, htmlContent: null }
    members.htmlContent = quoteBlock.querySelector(".quote-content")
    members.htmlUsername = quoteBlock.querySelector(".quote-username")
    return members
}
