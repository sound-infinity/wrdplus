import { SettingsSection } from "../section"
import HtmlSettings from "./form.html"
export class SettingsForm {
    contents: null | HTMLDivElement = null
    private OnClosedEvent = new Event("closed")

    public render() {
        if (this.contents != null) {
            document.body.appendChild(this.contents)
        }
    }
    constructor() {
        const container = document.createElement("div")
        container.innerHTML = HtmlSettings
        this.contents = container.firstElementChild as HTMLDivElement
        const btnCloseSettings = this.contents?.querySelector(".settings-close-btn")
        if (btnCloseSettings != null) {
            btnCloseSettings.addEventListener("click", () => {
                this.contents?.remove()
                this.contents?.dispatchEvent(this.OnClosedEvent)
            })
        }
    }

    addSection() {
        const section = new SettingsSection(this)
        section.render()
        return section
    }

    set onclosed(callback: EventListener) {
        this.contents?.addEventListener("closed", callback)
    }
}
