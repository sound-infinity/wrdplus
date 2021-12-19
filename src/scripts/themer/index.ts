import CssBackgroundImage from "./res/background-image.css"
import CssCustomLogo from "./res/custom-logo.css"
import CssFadeIn from "./res/fade-in.css"
import { initialize as initialize_customBackground } from "./custom-background"
import { initialize as initialize_customLogo } from "./custom-logo"
import { loadStyle } from "./utils"
import * as easyLoad from "../settings/easy-load"
import { DB_FEATURES } from "../settings/constants"

function try_run() {
    switch (document.readyState) {
        case "complete":
            break
        case "interactive":
            initialize_customBackground()
            initialize_customLogo()
            break
        case "loading":
            loadStyle(CssBackgroundImage)
            loadStyle(CssCustomLogo)
            if (easyLoad.getSavedValue(DB_FEATURES, "animations_fadeIn")) loadStyle(CssFadeIn)
        default:
            break
    }
}

try_run()
document.addEventListener("readystatechange", () => try_run())
