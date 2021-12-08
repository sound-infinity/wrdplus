import HtmlBackgroundImage from "./background-image.html"
export function createImage() {
    const container = document.createElement("div")
    container.innerHTML = HtmlBackgroundImage
    const image = <HTMLImageElement>container.firstElementChild
    image.className = "wrdplus-background"
    return image
}
