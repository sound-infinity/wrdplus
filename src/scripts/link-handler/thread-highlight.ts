import {getLinkType, LinkType} from "../../modules/wrd-lib";

const PrefixRegex = /^[\[](.*?)[\]]|^[[\(](.*?)[\)]/g
if (getLinkType() === LinkType.SECTION || getLinkType() === LinkType.INDEX) {
    document.querySelectorAll('a[href*="/forum/t"').forEach((thread : HTMLAnchorElement) => {
        if (thread.textContent.match(PrefixRegex)) {
            const [TitleText] = thread.textContent.match(PrefixRegex)
            const TitleHighlightElement = document.createElement("span")
            TitleHighlightElement.className = "wrd-title-tag"
            TitleHighlightElement.textContent = TitleText
            TitleHighlightElement.style.display = "inline-block"
            thread.textContent = thread.textContent.replace(PrefixRegex, "")
            thread.insertBefore(TitleHighlightElement, thread.firstChild)
        }
        thread.setAttribute("registered", "true")
    })
}
