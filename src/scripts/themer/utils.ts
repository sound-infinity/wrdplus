export function parseHTML(html: string) {
    const container = document.createElement("div")
    container.innerHTML = html
    return container.firstElementChild
}

export function loadStyle(source: string) {
    const style = document.createElement("style")
    style.innerHTML = source
    document.head.appendChild(style)
}
