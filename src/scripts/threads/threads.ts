import { DB, easyLoad } from "../settings"
import HtmlThreadTitleTag from "./thread-title-tag.html"

function title_element(title: string, tag: string) {
    const template = document.createElement("div")
    template.innerHTML = HtmlThreadTitleTag
    const element = template?.firstElementChild
    if (element != null) {
        // TitleTag
        const titleTag = element?.querySelector(".thread-title-tag")
        if (titleTag != null && titleTag.textContent != null) titleTag.textContent = tag.trim()
        // TitleText
        const titleText = element?.querySelector(".thread-title-text")
        if (titleText != null && titleText.textContent != null) titleText.textContent = title
    }
    return element
}

declare interface IParsedTitle {
    title?: string | null
    tag: string | null
}

function parse_title(title: string) {
    // example: [tag] title
    const parsed: IParsedTitle = { title: title, tag: null }
    const matches = title.match(/(\[.*?\])+/)
    if (matches != null) {
        parsed.tag = matches[0].substring(1, matches[0].length - 1)
        parsed.title = title.replace(matches[0], "")
    }
    return parsed
}

function load_thread_highlights() {
    // if (value === true) {
    let threadTitles = document.querySelector("table>tbody")?.querySelectorAll("a[href*=t].thread-title")

    function alternative() {
        threadTitles = document.querySelectorAll('a[href*="forum/t/"]:not([class*=btn])')
    }

    function alternative_2() {
        threadTitles = document.querySelectorAll("#topic")
    }

    if (threadTitles == null || threadTitles.length < 1) alternative()
    if (threadTitles == null || threadTitles.length < 1) alternative_2()
    if (threadTitles == null) return

    for (const threadTitle of Object.values(threadTitles)) {
        if (threadTitle.textContent != null) {
            const parsedThreadTitle = parse_title(threadTitle.textContent)
            if (parsedThreadTitle.title != null && parsedThreadTitle.tag != null) {
                const tag_Element = title_element(parsedThreadTitle.title, parsedThreadTitle.tag)
                if (tag_Element && threadTitle.parentNode) {
                    threadTitle.parentNode.insertBefore(tag_Element, threadTitle)
                    if (threadTitle.getAttribute("href") != null) tag_Element.setAttribute("href", threadTitle.getAttribute("href") || "")
                    threadTitle.remove()
                }
            }
        }
    }
    // }
}

easyLoad.getSavedValue(DB.DB_FEATURES, "thread_highlights").then((value) => {
    if (value === true) {
        switch (document.readyState) {
            case "complete":
            case "interactive":
                load_thread_highlights()
                break
            default:
                document.addEventListener("readystatechange", () => {
                    if (document.readyState === "interactive") load_thread_highlights()
                })
                break
        }
    }
})

export {}
