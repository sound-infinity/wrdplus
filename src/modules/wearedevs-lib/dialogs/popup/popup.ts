import { SiteDialog } from "../dialog"
import HtmlPopup from "./popup.html"

let lastPopup: SitePopup | null

export class SitePopup extends SiteDialog {
    render() {
        const apply = () => {
            if (this.contents != null) {
                document.body.appendChild(this.contents)
            }
        }
        if (lastPopup != null) {
            if (lastPopup.contents != null) {
                if (lastPopup.contents.parentNode != null) {
                    lastPopup.contents?.addEventListener("dismissed", () =>
                        apply()
                    )
                } else {
                    apply()
                }
            }
        } else {
            apply()
        }
        lastPopup = this
    }

    constructor() {
        super()
        const template = document.createElement("div")
        template.innerHTML = HtmlPopup
        this.contents = template.firstElementChild as HTMLDivElement
        this.contents
            .querySelector("div.popup.close-btn")
            ?.addEventListener("click", () => this.dismiss())
    }
    //#region getters
    get title(): string | null {
        const element = this.contents?.querySelector("div.popup.title")
        return element ? element.textContent : null
    }
    set title(text: string | null) {
        const element = this.contents?.querySelector("div.popup.title")
        if (element != null) {
            element.textContent = text
        }
    }
    get message(): string | null {
        const element = this.contents?.querySelector(".popup-message")
        return element ? element.textContent : null
    }
    set message(text: string | null) {
        const element = this.contents?.querySelector(".popup-message")
        if (element != null) {
            element.textContent = text
        }
    }
    set html(text: string) {
        const element = this.contents?.querySelector(".popup-message")
        if (element != null) {
            element.innerHTML = text
        }
    }
    //#endregion
    public dismiss() {
        this.remove()
    }
}
