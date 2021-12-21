import { extractThreadIdFromUrl, extractUserInfoFromTag } from "../../../modules/wearedevs-lib"
import { create } from "./mention"

export function initialize() {
    for (const userInfoContainer of document.querySelectorAll<HTMLDivElement>("div.thread_replierdata")) {
        const userDescription = userInfoContainer.querySelector<HTMLDivElement>("div.userdesc")
        if (userDescription != null) {
            //Checks if there is a mention button already made.
            //Creates a new mention button.
            if (userDescription.querySelector(".btnmention") == null) {
                const userInfoElement = userDescription.querySelector<HTMLAnchorElement>("a[href*=profile]")
                if (userInfoElement != null) {
                    const threadId = extractThreadIdFromUrl()
                    const userId = extractUserInfoFromTag(userInfoElement)?.id
                    if (threadId != null && userId != null) userDescription.appendChild(create(threadId, userId))
                }
            }
        }
    }
}
