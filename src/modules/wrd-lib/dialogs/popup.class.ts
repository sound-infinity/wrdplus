import popup from "../style-sheets/popup"

let open_dialog: Popup = null

export class ButtonData {
    handler: Function
    element: HTMLButtonElement
    label: string

    constructor(handler: Function, label?: string, element?: HTMLButtonElement) {
        this.handler = handler
        this.element = element
        this.label = label
    }

    remove() {
        this.handler = null
        this.element.remove()
        this.label = null
    }
}

export class Popup {
    global_buttons: {} = {}
    added_elements: HTMLElement[] = []
    elements: {[element_name:string]: HTMLElement} = {}
    onclose: (this: any, e: Event) => void
    onclick: (this: any, e: MouseEvent) => void

    constructor(description: string|string[] = "", title:string = "WRD+", showOnDone: boolean = true, onclose?: (this: any, e:Event) => void) {
        const elements = {
            close_button: document.createElement("div"),
            description: document.createElement("p"),
            container: document.createElement("div"),
            contents: document.createElement("div"),
            heading: document.createElement("h1"),
            header: document.createElement("div"),
            body: document.createElement("div")
        }

        elements.close_button.className = 'modal-close-btn'
        elements.container.className = 'modal-popup'
        elements.contents.className = 'modal-contents theme1 round'
        elements.header.className = 'modal-header'
        elements.body.className = 'modal-body'

        elements.header.appendChild(elements.heading)
        elements.body.appendChild(elements.description)
        elements.contents.appendChild(elements.close_button)
        elements.contents.appendChild(elements.header)
        elements.contents.appendChild(elements.body)
        elements.container.appendChild(elements.contents)

        //Text
        elements.close_button.innerText = '+'

        //Events - functions
        this.onclose = onclose
        this.onclick = (function (e: MouseEvent) {
            this.close(e)
        }).bind(this)

        //Events - User Input
        elements.close_button.addEventListener('click', this.onclick)
        elements.container.addEventListener('click', (e) => {
            if (e.target === elements.container) {
                this.onclick(e)
            }
        })

        //Other
        this.global_buttons = {}
        this.added_elements = []
        this.elements = elements

        //set props
        this.title = title
        this.description = description

        //show
        if (showOnDone) this.show()
    }

    //*Properties
    //Description
    get description() {
        return this.elements.description.textContent
    }
    
    set description(text: string|string[]) {
        this.elements.description.innerHTML = ''
        switch (typeof text) {
            case 'string':
                this.elements.description.textContent = text
                break
            case 'object':
                this.elements.description.innerHTML = text.join('<br/>')
                /* Wheter to use new line character or break element - specified at end of array
                if (text[text.length - 1] === true) {
                    text.pop()
                    this.elements.description.innerHTML = text.join('<br/>')
                } else {
                    this.elements.description.textContent = text.join('\n')
                }
                */
                break
            default:
                break
        }
    }

    //Title
    get title() {
        return this.elements.heading.textContent
    }

    set title(text: string) {
        this.elements.heading.textContent = text
    }

    //Buttons
    get buttons(): {[label: string]: ButtonData} {
        return this.global_buttons
    }

    set buttons(_buttons: {[label: string]: ButtonData}) {
        for (const button in this.buttons)
            this.buttons[button].remove()
        for (const buttonLabel in _buttons) {
            //If a button with the same name exists, remove it.
            if (this.buttons[buttonLabel]) {
                this.buttons[buttonLabel].remove()
                delete this.buttons[buttonLabel]
            }
            const buttonHandler = _buttons[buttonLabel].handler
            const buttonElement = document.createElement('button')
            //If the button contains a click handler, assign it.
            if (typeof buttonHandler === 'function') {
                buttonElement.style.cursor = 'pointer'
                buttonElement.addEventListener('click', buttonHandler.bind(this))
            }
            buttonElement.textContent = buttonLabel
            buttonElement.className = 'btn theme2 round'
            this.elements.body.appendChild(buttonElement)
            this.added_elements.push(buttonElement)
            this.buttons[buttonLabel] = new ButtonData(buttonHandler, buttonLabel, buttonElement)
        }
    }
    /**
     * Sets html instead of plain text
     * Removes current description
     */
    setHtml(html='') {
        this.description = ''
        this.elements.description.innerHTML = html 
    }
    /**
     * Checks on the stylesheet for the popup. If not found, it's added.
     */
    refresh() {
        if (!document.head.querySelector('style#wrd-plus-popup')) {
            const style = document.createElement('style')
            style.id = 'wrd-plus-popup'
            //style.innerHTML = `.modal-popup{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;z-index:2}.modal-popup .modal-contents{margin:auto;display:block;top:50vh;transform:translate(0,-50%);left:0;padding:10px;width:40vw;position:relative;border-radius:15px}.modal-popup .modal-contents h1{font-size:24px;margin:0 0 14px}.modal-popup .modal-contents .modal-close-btn{position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer;font-size:28px;right:0;top:0;margin:auto;height:16px;width:16px}.modal-popup .modal-body span{display:block}.modal-popup .btn{cursor:pointer;color:#e8e8e8;font-weight:700;padding:5px;background:#151719;min-width:80px;margin-top:4px;margin-right:4px;border:0}.modal-popup img{width:100%}`
            document.head.appendChild(style)
        }
    }
    /**
     * Controls
     */
    addLabel(text: string): HTMLSpanElement {
        const label = document.createElement('span')
        label.textContent =  text

        this.elements.body.appendChild(label)
        this.added_elements.push(label)

        return label
    }

    addLineBreak(): this {
        const br = document.createElement('br')
        this.elements.body.appendChild(br)
        this.added_elements.push(br)
        return this
    }

    addButton(text: string, onclick?: (this: Popup, e: MouseEvent) => void): HTMLButtonElement {
        const btn = document.createElement('button')
        btn.textContent = text
        btn.className = 'btn theme2 round'
        btn.onclick = onclick.bind(popup)

        this.elements.body.appendChild(btn)
        this.added_elements.push(btn)

        return btn
    }
    /**
     * Removes all added elements.
     */
    reset() {
        for (const element of this.added_elements) {
            element.remove()
        }
    }
    /**
     * Removes popup from the document.
     */

    fireOnClose() {
        if (typeof this.onclose === 'function')
            this.onclose.call(this, ...(arguments as unknown as any[]))
    }

    close(silent: boolean = false) {
        if (!silent) this.fireOnClose()
        if (this.elements.container)
            document.head.appendChild(this.elements.container)
    }

    remove(silent: boolean = false) {
        this.elements.container.remove()
        if(!silent) this.fireOnClose()
    }
    /**
     * Shows up popup in the document. 
     * @param {boolean} reset Determines if reset should be called, by default it's disabled.
     */
    show(reset = false) {
        if (reset) this.reset()
        if(document.readyState !== 'complete'){
            setTimeout((() => {
                this.show(reset)
            }).bind(this), 1000)
        } else {
            if (document.body.querySelector('.modal-popup')) {
                if (open_dialog && open_dialog !== this) {
                    open_dialog.onclose = () =>
                        this.show()
                }
            } else {
                open_dialog = this
                this.refresh()
                document.body.appendChild(this.elements.container)
            }    
        }
    }
}
