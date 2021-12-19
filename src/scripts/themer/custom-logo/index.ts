import { parseHTML } from "../utils"
import HtmlCustomLogo from "./custom-logo.html"

export function initialize() {
    const logo_mod = <HTMLAnchorElement>parseHTML(HtmlCustomLogo)
    const logo_original = document.querySelector("#foologo")
    logo_original?.parentElement?.insertBefore(logo_mod, logo_original)
    logo_original?.remove()

    // if (logo_mod != null) {
    //     const icon = document.createElement("img")
    //     icon.classList.add("wrdplus-custom-logo")
    //     icon.setAttribute("src", "/favicon.ico")
    //     logo_mod.textContent = ""
    //     logo_mod.appendChild(icon)
    // }
}
