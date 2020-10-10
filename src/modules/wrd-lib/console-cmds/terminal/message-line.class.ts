export class MessageLine {
    element: HTMLSpanElement
    constructor(_data: string|{text:string, css:string, html?: string}) {
        this.element = document.createElement("span")
        this.element.className = "line"
        if (typeof _data === "string")
            this.element.innerHTML = _data
        else {
            this.element.innerHTML = _data.html
            this.element.textContent = _data.text
            this.element.setAttribute("style", _data.css)
        }
    }
}