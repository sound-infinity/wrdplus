class SettingsSection {
    constructor(settingsForm, heading = 'SECTION') {
        this.inputs = {}
        settingsForm.addHeading(heading)
        this.form = document.createElement('form')
        this.form.onsubmit = (e) => e.preventDefault();
        settingsForm.elements.center.appendChild(this.form)
    }

    isNameValid(name) {
        return !(name in this.inputs)
    }
    setNameSuffix(name, suffix) {
        return (name.toString() + suffix)
    }

    addLineBreak() {
        const linebreak = document.createElement('br')
        this.form.appendChild(linebreak)
        return linebreak
    }

    addLabel(text) {
        const label = document.createElement('span')
        label.textContent = text
        this.form.appendChild(label)
        return label
    }

    addCheckbox(name, text) {
        name = this.setNameSuffix(name, '_cbox')
        if (this.isNameValid(name)) {
            const checkbox = document.createElement('input')
            checkbox.name = name
            checkbox.type = 'checkbox'
            
            this.form.appendChild(checkbox)
            this.addLabel(text||name)
            this.addLineBreak()
            this.inputs[name] = checkbox

            return checkbox
        }
    }

    addTextbox(name, text) {
        name = this.setNameSuffix(name, '_txt')
        if (this.isNameValid(name)) {
            const textbox = document.createElement('input')

            textbox.type = 'text'
            textbox.name = name
            
            this.addLabel(text||name)
            this.addLineBreak()
            this.form.appendChild(textbox)
            this.addLineBreak()
            
            this.inputs[name] = textbox
            return textbox
        }
    }

    addSubmitButton(clickHandler, text = 'Submit') {
        const submitBtn = document.createElement('input')

        submitBtn.innerText = text
        submitBtn.type = 'submit'

        this.addLineBreak()
        this.form.appendChild(submitBtn)
        this.addLineBreak()

        if (typeof clickHandler === 'function')
            submitBtn.addEventListener('click', clickHandler.bind(this, this))

        return submitBtn
    }

    getValueFromInput(input) {
        switch (input.type) {
            case 'checkbox':
                return input.checked
            default:
                return input.value
        }
    }

    getValues() {
        const values = {}
        for (const input of Object.values(this.inputs)) {
            values[input.name] = this.getValueFromInput(input)
        }
        return values
    }
}

class SettingsForm {
    constructor() {
        this.elements = {}
        this.elements.main = document.createElement("div")
        this.elements.center = document.createElement("div")
        this.elements.header = document.createElement("div")
        this.elements.closeButtonContainer = document.createElement("span")
        this.elements.closeButton = document.createElement("button")
        this.elements.wrdlogo = document.createElement("span")

        this.elements.main.id = 'settings'
        this.elements.center.classList.add('center')
        this.elements.header.classList.add('header')
        this.elements.wrdlogo.classList.add('middle', 'wrd-plus-logo')
        this.elements.closeButton.classList.add('close-btn')
        this.elements.closeButtonContainer.classList.add('middle', 'right')

        this.elements.main.appendChild(this.elements.center)
        this.elements.center.appendChild(this.elements.header)
        this.elements.header.appendChild(this.elements.wrdlogo)
        this.elements.header.appendChild(this.elements.closeButtonContainer)
        this.elements.closeButtonContainer.appendChild(this.elements.closeButton)
    }

    addSection() {
        return new SettingsSection(this, ...arguments)
    }

    addHeading(text = 'HEADING') {
        const heading = document.createElement('span')
        heading.innerText = text
        heading.classList.add('middle', 'heading')
        this.elements.center.appendChild(heading)
    }

    show() {
        document.body.appendChild(this.elements.main)
    }

    remove() {
        this.elements.main.remove()
    }
}