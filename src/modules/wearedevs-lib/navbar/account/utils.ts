import { fileToHtml } from "../../utils/converters"
import HtmlAccountMenu from "./menu.html"
import HtmlAccountMenuOption from "./menu-option.html"

export function isEmpty(container: HTMLDivElement) {
    if (container.children.length === 0) {
        return true
    }
    return false
}

export function getButton() {
    return document.querySelector<HTMLParagraphElement>(".navItem > [title*=Account]")
}

export function getMenu() {
    return getButton()?.parentNode?.querySelector("div.menu")
}

export function isMenuModified() {
    const menu = getMenu()
    if (menu == null) return null
    return menu.classList.contains("wrdplus-menu-account")
}

export function createMenu() {
    const menu = getMenu()
    if (menu != null) {
        menu?.parentNode?.insertBefore(fileToHtml<HTMLDivElement>(HtmlAccountMenu), menu)
        menu.remove()
    }
}

export function createMenuAction(text: string, name: string) {
    if (!isMenuModified()) return
    const element = fileToHtml<HTMLAnchorElement>(HtmlAccountMenuOption)
    element.textContent = text
    element.dataset.action = name.toString()
    return element
}

export function appendMenuAction(action: HTMLAnchorElement) {
    if (!isMenuModified()) return
    getMenu()?.appendChild(action)
    return action
}

export function setMenuStatus(enabled: boolean) {
    switch (enabled) {
        case true:
            if (!isMenuModified()) createMenu()

            break
        case false:
            if (isMenuModified()) createMenu()
            break

        default:
            break
    }
}
