// This script contains improvements or fixes for the WRD website.
import {
    SiteNotification,
    LinkType,
    getLinkType,
    extractThreadIdFromUrl,
    extractUserInfoFromTag,
} from "wearedevs-lib"

//404 Page
if (
    document.title.match("^Page doesn't exist!") &&
    location.search.match("jschl")
) {
    const queries = new URLSearchParams(location.search)
    queries.delete("__cf_chl_jschl_tk__")
    location.search = `?${queries.toString()}`

    const notif = new SiteNotification()
    notif.message = "Reloading page..."
    notif.render()
}

//Mention buttons
function createMentionButton(user: UserInfo): HTMLAnchorElement {
    const btn = document.createElement("a")
    btn.className = "theme1 border1 btnmention"
    btn.textContent = "Mention"
    btn.href = `/forum/t/${extractThreadIdFromUrl()}/newreply?mention=${
        user.id
    }`
    return btn
}

if (getLinkType() === LinkType.Thread) {
    function fixMentions() {
        for (const userInfoContainer of document.querySelectorAll<HTMLDivElement>(
            "div.thread_replierdata"
        )) {
            const userDescription =
                userInfoContainer.querySelector<HTMLDivElement>("div.userdesc")
            if (userDescription != null) {
                //Checks if there is a mention button already made.
                //Creates a new mention button.
                if (userDescription.querySelector(".btnmention") == null) {
                    const userInfoElement =
                        userDescription.querySelector<HTMLAnchorElement>(
                            "a[href*=profile]"
                        )
                    if (userInfoElement != null) {
                        const userInfo = extractUserInfoFromTag(userInfoElement)
                        userDescription.appendChild(
                            createMentionButton(userInfo)
                        )
                    }
                }
            }
        }
    }

    if (document.readyState === "complete") fixMentions()
    else {
        document.addEventListener("readystatechange", () => {
            if (document.readyState === "complete") fixMentions()
        })
    }
}
