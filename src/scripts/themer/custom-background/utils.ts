import { parseHTML } from "../utils"
import HtmlBackgroundImage from "./background-image.html"
import HtmlBackgroundSVG from "./background-svg.html"

export function createSVG() {
    // const container = document.createElement("div")
    // container.innerHTML = HtmlBackgroundSVG
    const maincontainer = <HTMLDivElement>parseHTML(HtmlBackgroundSVG) // < HTMLDivElement > container.firstElementChild
    const subcontainer = <HTMLDivElement>maincontainer.firstElementChild
    subcontainer.className = "wrdplus-background"
    return { container: maincontainer, subcontainer: subcontainer }
}

export function createImage() {
    //  const container =
    const image_container = <HTMLDivElement>parseHTML(HtmlBackgroundImage)
    const image = <HTMLImageElement>image_container.querySelector("img")
    image.className = "wrdplus-background"
    return { container: image_container, image: image }
}
