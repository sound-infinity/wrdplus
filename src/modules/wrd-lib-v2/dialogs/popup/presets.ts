import { SitePopup } from "./popup";
import HtmlPopupButton from "./popup-button.html";
import { SitePopupPreset, SitePopupYesNoResponse } from "./presets-enums";

export class SitePopupWithPreset extends SitePopup {
  onyesnoresponse: null | ((response: SitePopupYesNoResponse) => void) = null;

  constructor(preset: SitePopupPreset) {
    super();
    switch (preset) {
      case SitePopupPreset.YesNo:
        const btnYes = this.addButton();
        btnYes.textContent = "Yes";
        const btnNo = this.addButton();
        btnNo.textContent = "No";
        // events
        btnYes.onclick = () =>
          this.onyesnoresponse?.call(this, SitePopupYesNoResponse.Yes);
        btnNo.onclick = () =>
          this.onyesnoresponse?.call(this, SitePopupYesNoResponse.No);
        break;
      case SitePopupPreset.Default:
        const btnOkay = this.addButton();
        btnOkay.textContent = "Okay";
        btnOkay.onclick = () => this.dismiss();
        break;
      default:
        break;
    }
  }

  public addButton() {
    const template = document.createElement("div");
    template.innerHTML = HtmlPopupButton;
    const element = template.firstElementChild as HTMLAnchorElement;
    this.contents?.querySelector("div.popup-buttons")?.appendChild(element);
    return element;
  }
}
