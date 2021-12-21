import selectStorage from "../settings/easy-load"
import { DB_FEATURES } from "../settings/constants"
import { DB_QUOTE_CONTENT_ARRAY, DB_QUOTE_USERNAME } from "./constants"
import { getLinkType, LinkType } from "../../modules/wearedevs-lib/utils/link-type"
import { initialize as initialize_quoteLoader } from "./quote-loader"
import { mention_getOwnerContents, mention_getOwnerUserName, webpage_getMentions } from "./utils"
import type { MentionButton } from "./@types/declaration"

function onMentionClick(this: MentionButton, ev: MouseEvent) {
    const content = mention_getOwnerContents(this, true)
    const username = mention_getOwnerUserName(this)
    if (content == null || username == null) return
    sessionStorage.setItem(DB_QUOTE_USERNAME, username.toString())
    sessionStorage.setItem(DB_QUOTE_CONTENT_ARRAY, JSON.stringify(content))
    // ev.preventDefault()
}

function main() {
    switch (document.readyState) {
        case "complete":
            if (getLinkType() === LinkType.NewReply) {
                initialize_quoteLoader()
            }
            break
        case "interactive":
            for (const mention of webpage_getMentions()) {
                mention.addEventListener("click", onMentionClick)
            }
            break
        default:
            break
    }
}

function initialize() {
    const select = selectStorage(DB_FEATURES)
    if (select("better_mentions") === true) {
        document.addEventListener("readystatechange", main)
        main()
    }
}

initialize()
