import { DataStorage as DS } from './globals'
import { getLocalUserId, getLinkType, LinkType, setClipboardText, Notifications, Paginator, getQueries, getThreadIdFromUrl, dialogs, getUsername } from "../modules/wrd-lib";
import { DeveloperSettings, ExtraFeatures, OtherSettings } from "./settings";
import { Replies as replies } from '../modules/wrd-lib/utils/threads/reply-manager';

// Warnings
if (OtherSettings.get<boolean>('devmode')) {
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
Paginator.appendButton("⯆", function (this: HTMLSpanElement, e: MouseEvent) {
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
if (ExtraFeatures.get<boolean>("notification_redirection")) {
    if (Notifications.messages.length > 0) {
        for (const notif of Notifications.messages) {
            if (getLinkType(notif.link) === LinkType.Thread) {
                const tdata = DS.getKey(getThreadIdFromUrl(notif.link))
                
                if (tdata != null) {
                    const link = notif.elements.link as HTMLAnchorElement;
                    const queries = getQueries(link.href)
                    if (queries['page'] == null) {
                        queries['page'] = Math.floor((tdata.Replies+1) / 10).toString()
                        queries['mentionTo'] = encodeURIComponent(getUsername())
                        const mentionAuthor = link.textContent.match(/^(.*?) has mention/)
                        if (mentionAuthor != null) {
                            queries['mentionFrom'] = encodeURIComponent(mentionAuthor[1])
                        }
                    }
                    link.href = queries.toString()
                }
            }
        }
    }        
}

const oncomplete = () => {
    const queries = getQueries()
    const mentionAuthor = queries['mentionFrom'] && decodeURIComponent(queries['mentionFrom'])
    const mentionTarget = queries['mentionTo'] && decodeURIComponent(queries['mentionTo'])

    if (mentionTarget) {
        let list = replies.replies

        if (mentionAuthor != null){
            list = list.map(reply => reply.author.name.toUpperCase() === mentionAuthor.toUpperCase() && reply)
        }

        let lastReply: any
 
        if (list.length > 0) {
            for (const reply of list) {
                for (const mentioned of reply.mentions) {
                    if (mentioned.name.toUpperCase() === mentionTarget.toUpperCase()) lastReply = reply
                }
            }
        }

        if (lastReply != null) {
            setTimeout(() => lastReply.scrollIntoView(), 1000)
        }
    }
}

if (document.readyState === 'complete') oncomplete()
else document.addEventListener('readystatechange', () => document.readyState === 'complete' && oncomplete())
