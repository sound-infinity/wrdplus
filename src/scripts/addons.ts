import { LastestThreads as LT, DataStorage as DS } from './globals'
import { getLocalUserId, getLinkType, LinkType, setClipboardText, Notification, Notifications, Paginator, getQueries, getThreadIdFromUrl, ThreadData, dialogs } from "../modules/wrd-lib";
import { DeveloperSettings, OtherSettings } from "./settings";
import { Replies as replies } from '../modules/wrd-lib/utils/threads/reply-manager';

// Warnings
if (OtherSettings.get('devmode')) {
    dialogs.notification({
        title: 'Warning',
        description: 'You are in developer mode. You might encounter some problems.',
        timeout: 3000
    })
}

// Profile Url Copying
if (getLinkType() === LinkType.Profile) {
    const Info = document.querySelector('#info')
    const CopyBtn = document.createElement('button')
    CopyBtn.textContent = 'Copy Profile Link'
    CopyBtn.className = 'round button theme2'
    CopyBtn.addEventListener('click', () => {
        setClipboardText(`https://wearedevs.net/profile?uid=${getLocalUserId()}`)
        dialogs.notification({
            title: 'Addons',
            description: 'Copied profile link to clipboard',
            timeout: 1500
        })
    })
    Info.appendChild(CopyBtn)
}

// Goto Page Button
Paginator.appendButton("⯆", function (this:HTMLSpanElement, e: MouseEvent) {
    if (this !== e.target) return
    const input_holder = this.querySelector("#inputholder")
    if (input_holder) return input_holder.remove()

    this.title = 'Goto'
    this.style.position = "relative"

    const background = document.createElement<"div">("div")
    const input = document.createElement<"input">("input")

    background.id = "inputholder"
    background.className = 'round theme1'
    background.style.position = "absolute"

    background.style.padding = "2px"
    input.style.width = "50px"

    input.type = 'number'

    input.onkeydown = (e) => {
        if (e.key !== "Enter") return
        const queries = getQueries()

        let pageNumber: number = parseInt(input.value)
        if (pageNumber < 1) delete queries["page"]
        else if (pageNumber > Paginator.maxIndex) queries["page"] = Paginator.maxIndex.toString()
        else queries["page"] = pageNumber.toString()

        location.href = queries.toString()
    }

    background.appendChild(input)
    this.appendChild(background)
}, true)

//Console
if (OtherSettings.get<boolean>("devmode")) {
    DeveloperSettings.addButton("Run Terminal", () => {
        require("../modules/wrd-lib/console-cmds")
    })
}

//Notification Reply Page
Notifications.addMessage({
    description: "KissMeOnMouth",
    link: "https://wearedevs.net/forum/t/15681"
})
if (Notifications.messages.length > 0) {
    for (const notif of Notifications.messages) {
        if (getLinkType(notif.link) === LinkType.Thread) {
            const tdata = DS.getKey(getThreadIdFromUrl(notif.link))
            if (tdata) {
                const link = notif.elements.link as HTMLAnchorElement;
                if (!link.search.includes("page")) link.search = `?page=${Math.floor(tdata.Replies / 10)}`
            }
        }
    }
}

const queries = getQueries()
const gotoMention = parseInt(queries['mentionFrom'])
if (gotoMention) {
    console.log(gotoMention)
    for (const reply of replies.get_replies_from(gotoMention)) {
        console.log(reply)
    }
}