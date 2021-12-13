export function fileToHtml<T extends Element>(contents: string) {
    const container = document.createElement("div")
    container.innerHTML = contents.toString()
    return <T>container.firstElementChild
}
