import { GetNotificationsContainer, NotiCount } from './utils'
import timestamp from './timestamp'

export default class Notification {
    constructor(options = { text: '', link: '', thumbnail: '/favicon.ico' }) {
        this.elements = {}
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

        this.description = options.text
        if (options.link)
            this.link = options.link
        this.thumbnail = options.thumbnail

        this.elements.exit.innerText = "x"
        this.elements.time.innerText = timestamp.beautify(new Date())

        this.elements.exit.className = "notif-exit"
        this.elements.time.className = "notif-time"

        this.elements.exit.onclick = (function (e) {
            this.remove()
            e.stopPropagation()
            return false;
        }).bind(this)
    }
    //Description
    get description() {
        return this.elements.description.textContent
    }
    set description(text = '') {
        this.elements.description.textContent = text
    }
    //Link
    get link() {
        return this.elements.description.textContent
    }
    set link(link = '') {
        this.elements.description.href = link
    }
    //Thumbnail
    get thumbnail() {
        return this.elements.thumbnail.getAttribute(src)
    }
    set thumbnail(thumbnail = '/favicon.ico') {
        return this.elements.thumbnail.setAttribute('src', thumbnail)
    }

    remove() {
        this.elements.container.remove()
        NotiCount.value--
    }
    show() {
        const MainContainer = GetNotificationsContainer()
        if (MainContainer && this.elements.container.parentNode !== MainContainer) {
            MainContainer.appendChild(this.elements.container)
            NotiCount.value++
        }
    }
}