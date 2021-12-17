import { fileToHtml } from "../../utils/converters"
import HtmlAccountMenu from "./account-menu.html"

export function create() {
    const element = fileToHtml<HTMLDivElement>(HtmlAccountMenu)
    if (element == null) return
    //return indexItems(element)
}
