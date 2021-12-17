import { fileToHtml } from "../utils/converters"
import HtmlPaginator from "./paginator.html"
import { extractIndex } from "./utils"

export function getContainer() {
    return document.querySelector<HTMLDivElement>("#paginator")
}

export function getIndex(paginator: HTMLDivElement): number {
    // const paginator = paginator_get()
    //if (paginator == null) return null
    const index = paginator.querySelector("p")
    if (index == null) return 1
    if (index.textContent) return parseInt(index.textContent)
    return 1
}

declare type PaginatorButtons = {
    home: HTMLSpanElement | null
    previous: HTMLSpanElement | null
    index: HTMLSpanElement | null
    next: HTMLSpanElement | null
    end: HTMLSpanElement | null
}
export function buildButtonList(paginator: HTMLDivElement): PaginatorButtons {
    // const paginator = paginator_get()
    if (paginator == null) null

    return {
        home: paginator.querySelector(".home"),
        previous: paginator.querySelector(".previous"),
        index: paginator.querySelector(".index"),
        next: paginator.querySelector(".next"),
        end: paginator.querySelector(".end"),
    }
}

function button_OnClick(this: HTMLSpanElement) {
    const queries = new URLSearchParams(location.search)
    let index = 0
    if (this.dataset.index) index = parseInt(this.dataset.index)
    queries.set("page", index.toString())
    location.search = `?${queries.toString()}`
}

function setButtonHandler(button: HTMLSpanElement | null) {
    if (button != null) button.addEventListener("click", button_OnClick)
}

function setButtonIndex(button: HTMLSpanElement | null = null, index: number) {
    if (button) {
        if (index < 0) index = 0
        button.dataset.index = index.toString()
    }
}

function setIndex(paginator: HTMLDivElement, index: number) {
    const buttons = buildButtonList(paginator)
    if (buttons == null) return
    if (buttons.index) buttons.index.textContent = index.toString()
    if (paginator.lastElementChild) {
        const last = paginator.lastElementChild
        if (last.tagName === "SPAN" && last.getAttribute("onclick") != null) {
            const sourceCode = last.getAttribute("onclick")?.toString()
            if (sourceCode == null) return
            setButtonIndex(buttons.end, extractIndex(sourceCode) || 1)
        }
    }
    setButtonIndex(buttons.next, index + 1)
    setButtonIndex(buttons.previous, index - 1)
    //#region buttons handlers
    // next & previous
    setButtonHandler(buttons.next)
    setButtonHandler(buttons.previous)
    // home & end
    setButtonHandler(buttons.home)
    setButtonHandler(buttons.end)
    //#endregion
}

export function initialize() {
    const original = getContainer()
    if (original == null) return
    if (original.parentNode == null) return
    const modified = fileToHtml<HTMLDivElement>(HtmlPaginator)
    setIndex(modified, getIndex(original))
    original.parentNode.insertBefore(modified, original)
    original.remove()

    return {
        get index() {
            return getIndex(modified)
        },
        set index(value: number) {
            setIndex(modified, getIndex(original))
        },
        get buttons() {
            return buildButtonList(modified)
        },
    }
}
