import CssDisableSignatures from "./res/general.style.css"
import { easyLoad } from "../settings"
import { DB_FEATURES } from "../settings/constants"
import { loadStyle } from "../themer/utils"

function main() {
    switch (document.readyState) {
        // case "complete":
        case "interactive":
            loadStyle(CssDisableSignatures)
            break
        default:
            break
    }
}

function initialize() {
    if (easyLoad.getSavedValue(DB_FEATURES, "disable_signatures") !== true) return
    main()
    document.addEventListener("readystatechange", () => main())
}

// AutoRun
initialize()
