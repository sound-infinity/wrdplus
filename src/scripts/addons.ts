import { LastestThreads as LT, DataStorage as DS } from './globals'
import { getLocalUserId, getLinkType, LinkType, copyText, Notification, Paginator, getQueries, getThreadIdFromUrl, ThreadData } from "../modules/wrd-lib";
import { Notifications } from "../modules/wrd-lib/dropdown-menus/notifications";
import { DeveloperSettings, OtherSettings } from "./settings";

// Warnings
if (OtherSettings.getCheckboxValue('devmode')) {
    new Notification('You are in developer mode. You might encounter some problems.', 'Warning', 3*1000)
}

// Profile Url Copying
if (getLinkType() === LinkType.Profile) {
    const Info = document.querySelector('#info')
    const CopyBtn = document.createElement('button')
    CopyBtn.textContent = 'Copy Profile Link'
    CopyBtn.classList.add('round', 'button', 'theme2')
    CopyBtn.addEventListener('click', () => {
        copyText(`https://wearedevs.net/profile?uid=${getLocalUserId()}`)

        new Notification('Copied profile link to clipboard.', 'Addons', 1500)
    })
    Info.appendChild(CopyBtn)
}

// Goto page

Paginator.appendButton("⯆", function(e: MouseEvent) {
    if(this !== e.target) return
    const input_holder = (this as HTMLSpanElement).querySelector("#inputholder")
    if(input_holder){
        input_holder.remove()
        return
    }
    this.title = 'Goto'
   this.style.position = "relative"

    const background: HTMLDivElement = document.createElement("div")
    const input: HTMLInputElement = document.createElement("input")
    background.id = "inputholder"
    background.classList.add("round", "theme1")
    background.style.position = "absolute"

    background.style.padding = "2px"
    input.style.width = "50px"

    input.type = 'number'

    input.onkeydown = (e) => {
        if (e.key !== "Enter") return
        const queries = getQueries()

        let pageNumber: number = parseInt(input.value)
        if (pageNumber < 1) {
            delete queries["page"]
        } else if (pageNumber > Paginator.maxIndex) {
            queries["page"] = Paginator.maxIndex.toString()
        } else {
            queries["page"] = pageNumber.toString()
        }

        location.href = queries.toString()
    }
    
    background.appendChild(input)
    this.appendChild(background)
}, true)

//Console
if (OtherSettings.getCheckboxValue("devmode")) {
    DeveloperSettings.addButton("Run Terminal", () => {
        require("../modules/wrd-lib/console-cmds")
    })
}

//Notification Reply Page
if (Notifications.messages.length > 0) {
    for(const notif of Notifications.messages) {
        if (getLinkType(notif.link) === LinkType.Thread) {
            const tdata = DS.getKey(getThreadIdFromUrl(notif.link))
            if (tdata) {
                const link = notif.elements.link as HTMLAnchorElement;
                if (!link.search.includes("page")) link.search = `?page=${Math.floor(tdata.Replies/10)}`
            }
        }
    }
}