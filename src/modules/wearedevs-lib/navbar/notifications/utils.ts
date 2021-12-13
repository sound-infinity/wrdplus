import { fileToHtml } from "../../utils/converters"
import HtmlNotificationContainer from "./notification-container.html"

export function isEmpty(container: HTMLDivElement) {
    if (container.children.length === 0) {
        return true
    }
    return false
}

export function getButton() {
    return document.querySelector<HTMLSpanElement>(".dropmenu-title.notifbell")
}

export function getContainer() {
    const btn = getButton()
    if (btn != null) return btn.parentNode?.querySelector<HTMLDivElement>("div.notifications")
}

export function getMenu() {
    return getButton()?.parentNode?.querySelector(".menu")
}

declare interface INotificationMessage {
    avatar: string
    message: string
    threadUri: string
}

export function indexMessages() {
    const messages: INotificationMessage[] = []
    const container = getContainer()
    if (container == null) return
    if (isEmpty(container)) return
    for (const message of container.querySelectorAll<HTMLDivElement>("div.notification")) {
        messages.push({
            avatar: message.querySelector("img[src]")?.getAttribute("src") || "",
            message: message.querySelector("a[href]")?.textContent || "",
            threadUri: message.querySelector("a[href]")?.getAttribute("href") || "",
        })
    }
    return messages
}
function getNoNotificationsMessage() {
    const menu = getMenu()
    return menu?.querySelector("p:nth-child(1)")
}

function container_enable() {
    const button = getButton()
    let container = getContainer()
    if (container == null) {
        container = fileToHtml<HTMLDivElement>(HtmlNotificationContainer)
    }
    const menu = getMenu()
    if (menu != null) {
        if (button != null && container != null) menu.appendChild(container)
        getNoNotificationsMessage()?.remove()
    }
}
function container_disable() {
    const container = getContainer()
    if (container != null) {
        container?.remove()
    }
    const menu = getMenu()
    if (menu != null && getNoNotificationsMessage() == null) {
        const element = document.createElement("p")
        element.textContent = "No notifications"
        menu.appendChild(element)
    }
}

export function setContainerStatus(enabled: boolean) {
    switch (enabled) {
        case true:
            container_enable()
            break
        case false:
            container_disable()
            break

        default:
            break
    }
}
