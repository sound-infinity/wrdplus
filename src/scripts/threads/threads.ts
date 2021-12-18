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
    const matches = title.match(/(\[.*?\])/)
    if (matches != null) {
        for (const match of matches) {
            parsed.tag = match.substring(1, match.length - 1)
            parsed.title = title.replace(match, "")
        }
        // parsed.tag = matches[1].substring(1, matches[1].length - 1)
        // parsed.title = title.replace(matches[1], "")
    }
    return parsed
}

function getThreadTitles() {
    return [
        document.querySelectorAll("#topic"),
        document.querySelector("table>tbody")?.querySelectorAll("a[href*=t].thread-title"),
        document.querySelectorAll('a[href*="forum/t/"]:not([class*=btn])'),
    ]
}

function load_thread_highlights() {
    // if (value === true) {
    let threadTitles
    for (const threadTitlesArr of getThreadTitles()) {
        if (threadTitlesArr) {
            if (threadTitlesArr.length > 0) {
                threadTitles = threadTitlesArr
                break
            }
        }
    }

    if (threadTitles == null) return null
    for (const threadTitle of Object.values(threadTitles)) {
        if (threadTitle.textContent != null) {
            const parsedThreadTitle = parse_title(threadTitle.textContent)
            if (parsedThreadTitle.title != null && parsedThreadTitle.tag != null) {
                const tag_Element = title_element(parsedThreadTitle.title, parsedThreadTitle.tag)
                if (tag_Element && threadTitle.parentNode) {
                    threadTitle.parentNode.insertBefore(tag_Element, threadTitle)
                    if (threadTitle.getAttribute("href") != null)
                        tag_Element.setAttribute("href", threadTitle.getAttribute("href") || "")
                    threadTitle.remove()
                }
            }
        }
    }
    // }
}

const value = easyLoad.getSavedValue(DB.DB_FEATURES, "thread_highlights")
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

export {}
