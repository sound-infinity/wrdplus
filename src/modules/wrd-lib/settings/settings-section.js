import SettingsForm from './settings-form'

export default class SettingsSection {
    /**
     * 
     * @param {SettingsForm} settingsForm 
     * @param {string} heading 
     */
    constructor(settingsForm, heading = 'SECTION') {
        this.inputs = {}
        settingsForm.addHeading(heading)
        this.form = document.createElement('form')
        this.form.onsubmit = (e) => e.preventDefault();
        settingsForm.elements.center.appendChild(this.form)
    }
    /**
     * 
     * @param {string} name 
     */
    isNameValid(name) {
        return !(name in this.inputs)
    }
    /**
     * 
     * @param {string} name 
     * @param {string} suffix 
     */
    setNameSuffix(name, suffix) {
        return (name.toString() + suffix)
    }
    /**
     * @returns {HTMLBRElement}
     */
    addLineBreak() {
        const linebreak = document.createElement('br')
        this.form.appendChild(linebreak)
        return linebreak
    }
    /**
     * 
     * @param {string} text
     * @param {number} level
     * @returns {HTMLSpanElement} 
     */
    addHeading(text, level = 1) {
        const label = document.createElement(`h${level}`)
        label.textContent = text
        this.form.appendChild(label)
        return label
    }
    /**
     * 
     * @param {string} text
     * @returns {HTMLSpanElement} 
     */
    addLabel(text) {
        const label = document.createElement('span')
        label.textContent = text
        this.form.appendChild(label)
        return label
    }
    /**
     * 
     * @param {string} html
     * @returns {void} 
     */
    appendHtml(html = '') {
        this.form.innerHTML += html
    }
    /**
     * 
     * @param {string} name Identifier to access its value later. Suffix _cbox
     * @param {string} text
     * @returns {HTMLInputElement} 
     */
    addCheckbox(name, text) {
        name = this.setNameSuffix(name, '_cbox')
        if (this.isNameValid(name)) {
            const checkbox = document.createElement('input')
            checkbox.name = name
            checkbox.type = 'checkbox'

            this.form.appendChild(checkbox)
            this.addLabel(text || name)
            this.addLineBreak()
            this.inputs[name] = checkbox

            return checkbox
        }
    }
    /**
     * 
     * @param {string} name Identifier to access its value later. Suffix: _txt
     * @param {string} text
     * @returns {HTMLInputElement} 
     */
    addTextbox(name, text) {
        name = this.setNameSuffix(name, '_txt')
        if (this.isNameValid(name)) {
            const textbox = document.createElement('input')

            textbox.type = 'text'
            textbox.name = name

            this.addLabel(text || name)
            this.addLineBreak()
            this.form.appendChild(textbox)
            this.addLineBreak()

            this.inputs[name] = textbox
            return textbox
        }
    }
    /**
     * 
     * @param {string} text
     * @param {(this: SettingsSection, e: SettingsSection)=>void} clickHandler
     * @returns {HTMLInputElement} 
     */
    addSubmitButton(text = 'Submit', clickHandler) {
        const submitBtn = document.createElement('input')

        submitBtn.value = text
        submitBtn.type = 'submit'

        this.form.appendChild(submitBtn)

        if (typeof clickHandler === 'function')
            submitBtn.addEventListener('click', clickHandler.bind(this, this))

        return submitBtn
    }
    /**
     * 
     * @param {HTMLInputElement} input 
     */
    getValueFromInput(input) {
        switch (input.type) {
            case 'checkbox':
                return input.checked
            default:
                return input.value
        }
    }
    /**
     * @returns {Object[]}
     */
    getValues() {
        const values = {}
        for (const input of Object.values(this.inputs)) {
            values[input.name] = this.getValueFromInput(input)
        }
        return values
    }
}