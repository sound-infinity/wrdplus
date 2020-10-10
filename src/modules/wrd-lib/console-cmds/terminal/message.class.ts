import { Terminal } from './terminal.class'
import { MessageLine } from './message-line.class'

export class Message {
    messages: MessageLine[] = []
    element: HTMLSpanElement = document.createElement("span")
    terminal: Terminal
    
    constructor(_terminal: Terminal) {
        this.terminal = _terminal
        this.element.className = "message"
    }

    addText(_text: any) {
        const Line = new MessageLine(_text)
        this.messages.push(Line)
    }

    addBreak() {
        this.messages[this.messages.length-1].element.appendChild(document.createElement("br"))
    }

    show() {
        for (const msg of this.messages) {
            this.element.appendChild(msg.element)
        }
        this.terminal.elements.body.appendChild(this.element)
    }
}