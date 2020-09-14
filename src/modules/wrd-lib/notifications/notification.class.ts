import { GetNotificationsContainer, NotiCount } from './utils'
import timestamp from './timestamp'

export class Notification {
    private elements: {[elementName: string]: HTMLElement} = {}
    constructor(link: string, label: string = 'WRD+ Notification', thumbnail: string = '/favicon.ico') {
        this.elements.container = document.createElement("div")
        this.elements.subContainer = document.createElement("div")
        this.elements.description = document.createElement("a")
        this.elements.thumbnail = document.createElement("img")
        this.elements.time = document.createElement("p")
        this.elements.exit = document.createElement("p")

        this.elements.container.appendChild(this.elements.thumbnail)
        this.elements.container.appendChild(this.elements.subContainer)
        this.elements.container.appendChild(this.elements.exit)

        this.elements.subContainer.appendChild(this.elements.description)
        this.elements.subContainer.appendChild(this.elements.time)

        this.elements.container.className = "notification"

        this.description = label
        if (link)
            this.link = link
        this.thumbnail = thumbnail

        this.elements.exit.innerText = "x"
        this.elements.time.innerText = timestamp.beautify(new Date())

        this.elements.exit.className = "notif-exit"
        this.elements.time.className = "notif-time"

        this.elements.exit.onclick = (function (e: MouseEvent) {
            this.remove()
            e.stopPropagation()
            return false;
        }).bind(this)
    }
    //Description
    get description(): string {
        return this.elements.description.textContent
    }
    set description(text: string) {
        this.elements.description.textContent = text
    }
    //Link
    get link(): string {
        return this.elements.description.textContent
    }
    set link(link: string) {
        (this.elements.description as HTMLAnchorElement).href = link
    }
    //Thumbnail
    get thumbnail(): string {
        return this.elements.thumbnail.getAttribute('src')
    }
    set thumbnail(thumbnail: string) {
        this.elements.thumbnail.setAttribute('src', thumbnail)
    }

    remove(): void {
        this.elements.container.remove()
        NotiCount.value--
    }
    show(): void {
        const MainContainer = GetNotificationsContainer()
        if (MainContainer && this.elements.container.parentNode !== MainContainer) {
            MainContainer.appendChild(this.elements.container)
            NotiCount.value++
        }
    }
}