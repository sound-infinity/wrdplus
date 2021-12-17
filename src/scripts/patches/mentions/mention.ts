import { fileToHtml } from "../../../modules/wearedevs-lib/utils/converters"
import HtmlButton from "./mention.html"

export function create(threadId: number, userId: number) {
    const element = fileToHtml<HTMLAnchorElement>(HtmlButton)
    element.dataset.uid = userId.toString()
    element.href = `/forum/t/${threadId}/newreply?mention=${userId}`
    return element
}
