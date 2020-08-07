import { Popup } from '../dialogs'
import SettingsForm from './settings-form'
import DataManager from '../../data-manager'
enum Suffixes {
    TextBox = 'txt',
    CheckBox = 'cbox'
}
//TODO: Rewrite for cleaner code

export default class SettingsSection {
    public name: string
    private inputs: any = {}
    private form: HTMLFormElement = document.createElement('form') 
    constructor(settingsForm: SettingsForm, heading: string = 'SECTION') {
        this.name = heading
        settingsForm.addHeading(heading)
        this.form.onsubmit = (e) => e.preventDefault();
        (settingsForm.elements as any).center.appendChild(this.form)
    }

    isNameValid(name: string): boolean {
        return !(name in this.inputs)
    }
    
    setNameSuffix(name: string, suffix: string): string {
        return `${ name.toString() }_${ suffix }`
    }

    addLineBreak(): HTMLBRElement {
        const linebreak = document.createElement('br')
        this.form.appendChild(linebreak)
        return linebreak
    }
    
    addHeading(text: string, level: number = 1): HTMLSpanElement {
        const label = document.createElement(`h${level}`)
        label.textContent = text
        this.form.appendChild(label)
        return label
    }
    
    addLabel(text: string): HTMLSpanElement {
        const label = document.createElement('span')
        label.textContent = text
        this.form.appendChild(label)
        return label
    }
    
    appendHtml(html: string = ''): void {
        this.form.innerHTML += html
    }

    // Getters
    getCheckboxValue(name: string): boolean {
        return this.inputs[this.setNameSuffix(name, Suffixes.CheckBox)].checked
    }
    
    getTextboxValue(name: string): string {
        return this.inputs[this.setNameSuffix(name, Suffixes.TextBox)].value
    }

    addCheckbox(name: string, text: string): HTMLInputElement {
        name = this.setNameSuffix(name, Suffixes.CheckBox)
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
    
    addTextbox(name: string, text: string): HTMLInputElement {
        name = this.setNameSuffix(name, Suffixes.TextBox)
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
    
    addSubmitButton(text: string = 'Submit', clickHandler?: (this: SettingsSection, e: SettingsSection)=>void): HTMLInputElement {
        const submitBtn = document.createElement('input')

        submitBtn.value = text
        submitBtn.type = 'submit'

        this.form.appendChild(submitBtn)

        if (typeof clickHandler === 'function')
            submitBtn.addEventListener('click', clickHandler.bind(this, this))

        return submitBtn
    }

    addSaveButton(dataManager: DataManager, showPopup: boolean = true): HTMLInputElement {
        return this.addSubmitButton('Save', (e)=>{
            dataManager.setKey(e.name.replace(/\s/g, ''), e.getValues())
            if (showPopup){
                (new Popup(`Saved "${ e.name }".`, 'Data Manager')).show()
                location.reload()
            }
        })
    }
    
    getValueFromInput(input: HTMLInputElement) {
        switch (input.type) {
            case 'checkbox':
                return input.checked
            default:
                return input.value
        }
    }

    setValueToInput(input: HTMLInputElement, value: any) {
        switch (input.type) {
            case 'checkbox':
                input.checked = value
                break;
            default:
                input.value = value
                break;
        }
    }
    
    getValues(): any {
        const values: any = {}
        for (const input of Object.values(this.inputs) as HTMLInputElement[]) {
            values[input.name] = this.getValueFromInput(input)
        }
        return values
    }

    setValues(values: any) {
        for (const input of Object.values(this.inputs) as HTMLInputElement[]) {
            this.setValueToInput(this.inputs[input.name], values[input.name])
        }
    }
}