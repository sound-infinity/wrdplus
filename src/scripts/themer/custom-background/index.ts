import { DB_THEME_MODIFICATIONS } from "../../settings/constants"
import * as easyLoad from "../../settings/easy-load"
import { createImage } from "./utils"
import svgToMiniDataURI from "mini-svg-data-uri"

const storage = easyLoad.select(DB_THEME_MODIFICATIONS)

function loadSavedImageSize(image: HTMLImageElement) {
    let imageSize = storage("custom_background_size")
    if (imageSize == null) return
    imageSize = imageSize.toLowerCase()
    if (imageSize !== "auto") {
        const [width, height] = imageSize.split("x")
        image.style.width = width + "px"
        image.style.height = height + "px"
    }
}

function loadSVG(uri: string) {
    const elements = createImage()
    elements.image.setAttribute("src", svgToMiniDataURI(uri))
    document.body.insertBefore(elements.container, document.body.firstChild)
}
function loadImage(uri: string) {
    const elements = createImage()
    elements.image.setAttribute("src", uri)
    loadSavedImageSize(elements.image)
    document.body.insertBefore(elements.container, document.body.firstChild)
}

export function initialize() {
    const backgroundUri = storage("custom_background")

    if (backgroundUri != null) {
        if (storage("custom_background_enabled") === true) {
            if (storage("custom_background_asSVG") === true) loadSVG(backgroundUri)
            else loadImage(backgroundUri)
        }
    }
}
