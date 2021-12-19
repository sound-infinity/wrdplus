import { DB_THEME_MODIFICATIONS } from "../../settings/constants"
import * as easyLoad from "../../settings/easy-load"
import { createImage } from "./utils"
import svgToMiniDataURI from "mini-svg-data-uri"

function loadSVG(uri: string) {
    const elements = createImage()
    elements.image.setAttribute("src", svgToMiniDataURI(uri))
    document.body.insertBefore(elements.container, document.body.firstChild)
}
function loadImage(uri: string) {
    const elements = createImage()
    elements.image.setAttribute("src", uri)
    document.body.insertBefore(elements.container, document.body.firstChild)
}

export function initialize() {
    const select = easyLoad.select(DB_THEME_MODIFICATIONS)
    const backgroundUri = select("custom_background")

    if (backgroundUri != null) {
        if (select("custom_background_enabled") === true) {
            if (select("custom_background_asSVG") === true) loadSVG(backgroundUri)
            else loadImage(backgroundUri)
        }
    }
}
