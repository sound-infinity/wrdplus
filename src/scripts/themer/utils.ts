import HtmlBackgroundImage from "./background-image.html"
export function createImage() {
    const container = document.createElement("div")
    container.innerHTML = HtmlBackgroundImage
    const image_container = <HTMLDivElement>container.firstElementChild
    const image = <HTMLImageElement>image_container.querySelector("img")
    image.className = "wrdplus-background"
    return { container: image_container, image: image }
}
