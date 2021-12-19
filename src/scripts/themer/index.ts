import CssBackgroundImage from "./res/background-image.css"
import CssCustomLogo from "./res/custom-logo.css"
import { initialize as initialize_customBackground } from "./custom-background"
import { initialize as initialize_customLogo } from "./custom-logo"
import { loadStyle } from "./utils"

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
        default:
            break
    }
}

try_run()
document.addEventListener("readystatechange", () => try_run())
