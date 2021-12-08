import { DB_THEME_MODIFICATIONS } from "./settings/constants"
import { IOnSectionLoad } from "./settings/IOnSectionLoad"

document.addEventListener("sectionload", (e: CustomEvent | Event): void => {
    const detail = (<CustomEvent<IOnSectionLoad>>e).detail
    if (detail.sectionId === DB_THEME_MODIFICATIONS) {
        if (detail.values["custom_background"] != null) {
            document.body.style.background = `url(${detail.values["custom_background"]})`
        }
    }
})
