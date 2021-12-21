import { DB_QUOTE_USERNAME, DB_QUOTE_CONTENT_ARRAY } from "../constants"
import { createQuoteBlock, getMembers } from "./utils"

export function initialize() {
    const stored = {
        username: sessionStorage.getItem(DB_QUOTE_USERNAME),
        contents: sessionStorage.getItem(DB_QUOTE_CONTENT_ARRAY)
    }

    if (stored.username && stored.contents) {
        const members = getMembers(createQuoteBlock())
        if (members.htmlUsername) {
            members.htmlUsername.textContent = stored.username
        }
        if (members.htmlContent) {
            const contents = JSON.parse(stored.contents)
            if (contents != null) {
                members.htmlContent.innerHTML = contents.at(-1)
            }
        }
    }
}
