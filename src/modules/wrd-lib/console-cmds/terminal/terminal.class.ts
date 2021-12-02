import { Message } from './message.class'

interface MessageData {
    prefix?: string
    text: string
    css?: string
    html?: string
}

export class Terminal {
    elements: {[key: string]: HTMLElement} = {}
    prefix: string

    constructor(_prefix: string = "") {
        this.elements.window = document.createElement("div")
        this.elements.subwindow = document.createElement("div")
        this.elements.topbar = document.createElement("div")
        this.elements.body = document.createElement("div")
        this.elements.cmdbar = document.createElement("div")
        this.elements.cmdinput = document.createElement("input")

        this.elements.window.className = "window"
        this.elements.subwindow.className = "subwindow"
        this.elements.topbar.className = "tm_topbar"
        this.elements.body.className = "tm_body"
        this.elements.cmdbar.className = "tm_commandbar"
        this.elements.cmdinput.spellcheck = false

        this.elements.window.appendChild(this.elements.subwindow)
        this.elements.subwindow.appendChild(this.elements.topbar)
        this.elements.subwindow.appendChild(this.elements.body)
        this.elements.subwindow.appendChild(this.elements.cmdbar)
        this.elements.cmdbar.appendChild(this.elements.cmdinput)

        this.prefix = _prefix
    }

    sendMessage(...args: any) {
        const message = new Message(this)
        message.addText(this.prefix+" ")
        for (const msg of args) {
            message.addText(msg)
        }
        message.addBreak()
        message.show()

        return message
    }

    sendMessageWithData(data: MessageData) {
        const message = new Message(this)
        message.addText({
            text: `${data.prefix||""}${this.prefix}`,
            css: data.css
        })
        message.addText(data)
        message.addBreak()
        message.show()
    }

    set oncommand (handler: (this: HTMLInputElement, e?: KeyboardEvent) => void) {
        this.elements.cmdinput.onkeydown = (e: KeyboardEvent) => {
            if (e.key === "Enter")
                handler.call(this.elements.cmdinput, e)
        }
    }

    show() {
        document.body.appendChild(this.elements.window)
    }
}