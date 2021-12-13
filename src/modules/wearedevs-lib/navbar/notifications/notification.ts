import { fileToHtml } from "../../utils/converters"
import HtmlNotification from "./notification.html"
import { getButton, getContainer, setContainerStatus } from "./utils"

export function indexItems(container: HTMLDivElement) {
    return {
        container: container,
        image: container.querySelector<HTMLImageElement>(".wrdplus-noti-image"),
        message: container.querySelector<HTMLAnchorElement>(".wrdplus-noti-message"),
    }
}

export function create() {
    const element = fileToHtml<HTMLDivElement>(HtmlNotification)
    if (element == null) return
    return indexItems(element)
}
