import {getLinkType, LinkType} from "../../modules/wrd-lib";
import { ExtraFeatures } from "../settings";

const PrefixRegex = /^[\[](.*?)[\]]|^[[\(](.*?)[\)]/g
if (getLinkType() === LinkType.Section || getLinkType() === LinkType.Index) {
    
    document.querySelectorAll('a[href*="/forum/t"').forEach((thread : HTMLAnchorElement) => {
        if (ExtraFeatures.get<boolean>("threadhighlights")) {
            if (thread.textContent.match(PrefixRegex)) {
                const [TitleText] = thread.textContent.match(PrefixRegex)
                const TitleHighlightElement = document.createElement("span")
                TitleHighlightElement.className = "wrd-title-tag"
                TitleHighlightElement.textContent = TitleText
                TitleHighlightElement.style.display = "inline-block"
                thread.textContent = thread.textContent.replace(PrefixRegex, "")
                thread.insertBefore(TitleHighlightElement, thread.firstChild)
            }
        }
        if (ExtraFeatures.get<boolean>("threadmarkings")) thread.setAttribute("registered", "true")
    })
}
