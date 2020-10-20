import timestamp from './timestamp'
import { MenuType, get_dropdown } from './utils'

interface MessageData {
    link?: string,
    thumbnail?: string,
    description: string,
    onclose?: () => void
    elements?: {[key: string]: HTMLElement}
}

class Notification {
    main: HTMLDivElement
    thumbnail: HTMLImageElement
    message: HTMLDivElement
    link: HTMLAnchorElement
    time: HTMLParagraphElement
    exitBtn: HTMLParagraphElement
    _data: MessageData

    constructor(data: MessageData) {
        this.main = document.createElement('div')
        this.thumbnail = document.createElement('img')
        this.message = document.createElement('div')
        this.link = document.createElement('a')
        this.time = document.createElement('p')
        this.exitBtn = document.createElement('p')
    
        this.time.innerText = timestamp.beautify(new Date())

        this.main.className = 'notification'
        this.time.className = 'notif-time'
        this.exitBtn.className = 'notif-exit'

        this.exitBtn.onclose = data.onclose
        this.exitBtn.addEventListener('close', () => {
            this.remove()
        })

        this.main.appendChild(this.thumbnail)
        this.main.appendChild(this.message)
        this.message.appendChild(this.link)
        this.message.appendChild(this.time)
        this.main.appendChild(this.exitBtn)

        this.data = data
    }

    get data() {
        return this._data
    }

    set data(data: MessageData) {
        this.thumbnail.src = data.thumbnail || '/favicon.ico'
        this.link.textContent = data.description
        if (data.link) this.link.href = data.link
        this._data = data
    }

    remove() {
        this.main.remove()
    }
}

class NotificationManager {
    containers: {[name: string]: HTMLElement} = {}

    verify_elements() {
        this.containers.main = get_dropdown(MenuType.Notifications)
        if (this.containers.main == null) return;

        this.containers.messages = this.containers.main.querySelector('div.menu > .notifications')
        this.containers.messageCounter = this.containers.main.querySelector('.notifcount')

        if (this.containers.messages == null) {
            const messages_element = document.createElement('div')
            messages_element.className = 'notifications'
            this.containers.main.querySelector('.menu').appendChild(messages_element)
            this.containers.messages = messages_element
        }

        if (this.containers.messageCounter == null) {
            const messageCounter_element = document.createElement('span')
            messageCounter_element.className = 'notifcount'
            messageCounter_element.textContent = this.containers.messages.children.length.toString()
            this.containers.main.querySelector('.notifbell').appendChild(messageCounter_element)
            this.containers.messageCounter = messageCounter_element
        }

        this.update_elements()
    }

    update_elements() {
        if (this.containers.messages) {
            this.containers.messageCounter.textContent = this.length.toString()
            this.containers.messageCounter.style.display = ''
            if (this.length <= 0) this.containers.messageCounter.style.display = 'none'
        }
    }

    constructor () {this.verify_elements()}

    addMessage(data: MessageData) {
        const notif = new Notification(data)
        this.containers.messages.appendChild(notif.main)

        this.update_elements()
        return notif;
    }

    get hasMessages () {
        return this.containers.messages.children.length > 0
    }

    get messages() {
        const messages: MessageData[] = []
        if (this.containers.messages == null) return messages;
         
        for (const notif of Object.values(this.containers.messages.querySelectorAll<HTMLDivElement>('div.notification'))) {
            const link = notif.querySelector("a")
            const thumbnail = notif.querySelector("img")

            messages.push({
                get link() {
                    return link.href
                }, set link(url: string) {
                    link.href = url
                },
                get thumbnail() {
                    return thumbnail.src
                }, set thumbnail(url: string) {
                    thumbnail.src = url
                },
                get description() {
                    return link.textContent
                }, set description(text: string) {
                    link.textContent = text
                },

                elements: {link: link, thumbnail: thumbnail}
            })
        }

        return messages
    }

    get length() {
        return this.containers.messages.children.length
    }
}

export const Notifications = new NotificationManager()