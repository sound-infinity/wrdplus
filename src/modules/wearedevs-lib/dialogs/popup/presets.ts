import { SitePopup } from "./popup"
import HtmlPopupButton from "./popup-button.html"
import HtmlPopupLabel from "./popup-label.html"
import { SitePopupPreset, SitePopupYesNoResponse } from "./presets-enums"

export class SitePopupWithPreset extends SitePopup {
    onyesnoresponse: null | ((response: SitePopupYesNoResponse) => void) = null

    constructor(preset: SitePopupPreset) {
        super()
        switch (preset) {
            case SitePopupPreset.YesNo:
                const btnYes = this.addButton()
                btnYes.textContent = "Yes"
                const btnNo = this.addButton()
                btnNo.textContent = "No"
                // events
                btnYes.onclick = () =>
                    this.onyesnoresponse?.call(this, SitePopupYesNoResponse.Yes)
                btnNo.onclick = () =>
                    this.onyesnoresponse?.call(this, SitePopupYesNoResponse.No)
                break
            case SitePopupPreset.Okay:
                const btnOkay = this.addButton()
                btnOkay.textContent = "Okay"
                btnOkay.onclick = () => this.dismiss()
                break
            default:
                break
        }
    }
    public appendBreak() {
        const element = document.createElement("br")
        this.contents?.querySelector("div.popup-messages")?.appendChild(element)
        return element
    }
    public appendLabel(label: string) {
        const template = document.createElement("div")
        template.innerHTML = HtmlPopupLabel
        const element = template.firstElementChild as HTMLAnchorElement
        if (label != null) element.textContent = label
        this.contents?.querySelector("div.popup-messages")?.appendChild(element)
        return element
    }

    public appendButton(label: string) {
        const button = this.addButton(label)
        this.contents?.querySelector(".popup-messages")?.appendChild(button)
        return button
    }

    public addButton(label?: string) {
        const template = document.createElement("div")
        template.innerHTML = HtmlPopupButton
        const element = template.firstElementChild as HTMLAnchorElement
        if (label != null) element.textContent = label
        this.contents?.querySelector("div.popup-buttons")?.appendChild(element)
        return element
    }
}
