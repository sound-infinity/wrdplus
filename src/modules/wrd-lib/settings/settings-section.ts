import { Popup } from '../dialogs'
import { SettingsForm } from './settings-form'
import DataManager from '../../data-manager'

enum Suffixes {
    TextBox = 'txt',
    CheckBox = 'cbox',
    ColorPicker = 'color'
}

//Interfaces
interface InputData {
    /**Text displayed to the user.*/
    title: string,
    /**Identifier used to lookup the input element.*/
    id: string,
}

interface TextboxData extends InputData {
    /**Sets the width of the element to fill the remaining space.*/
    fillX?: boolean,
    /**Text displayed when there is no input.*/
    placeholder?: string,
}

interface CheckboxData extends InputData {
    /**Defines the checked status of the element..*/
    checked?: boolean,
    oncheck?: (e: {isChecked: boolean}) => void
}

interface SaveButtonData {
    /**Defines the data holder, for the values to be save onto. */
    dataManager: DataManager,
    /**Displays a popup message, and reloads the page.*/
    showSaveMessage?: boolean,
    /**Wether the data-manager should be imported to the its section.*/
    loadSavedSettings?: boolean
}

interface ColorPickerData extends InputData {
    /**HEX color code */
    color?: string
}

export class SettingsSection {
    public name: string
    private dataManager: DataManager
    private savedName: string
    private inputs: any = {}
    private form: HTMLFormElement = document.createElement('form') 
    constructor(settingsForm: SettingsForm, heading: string = 'SECTION') {
        this.name = heading
        settingsForm.addHeading(heading)
        this.form.onsubmit = (e) => e.preventDefault();
        settingsForm.elements.center.appendChild(this.form)
    }

    exists(name: string): boolean {
        return name in this.inputs
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
    
    addCheckbox(data: CheckboxData) {
        data.id = this.setNameSuffix(data.id, Suffixes.CheckBox)
        if (!this.exists(data.id)) {
            const checkbox = document.createElement('input')
            
            checkbox.name = data.id
            checkbox.type = 'checkbox'
            checkbox.checked = data.checked || false

            if (data.oncheck != null){
                checkbox.onchange = () => {
                    data.oncheck.call(checkbox, {isChecked:checkbox.checked})
                }

                checkbox.onload = () => {
                    data.oncheck.call(checkbox, {isChecked:checkbox.checked})
                }
            }

            this.form.appendChild(checkbox)
            this.addLabel(data.title)
            this.addLineBreak()
            this.inputs[data.id] = checkbox

            return checkbox
        }
    }

    addTextbox(data: TextboxData) {
        data.id = this.setNameSuffix(data.id, Suffixes.TextBox)

        if (!this.exists(data.id)) {
            const textbox = document.createElement('input')
            
            textbox.type = 'text'
            textbox.name = data.id
            textbox.placeholder = data.placeholder

            if (data.fillX)
                textbox.style.width = "100%"
            
            this.addLabel(data.title)
            this.addLineBreak()
            this.form.appendChild(textbox)
            this.addLineBreak()

            this.inputs[data.id] = textbox
            return textbox
        }
    }

    addColorPicker(data: ColorPickerData) {
        data.id = this.setNameSuffix(data.id, Suffixes.TextBox)

        if (!this.exists(data.id)) {
            const colorpicker = document.createElement('input')
            
            colorpicker.type = 'color'
            colorpicker.name = data.id
            if (data.color) colorpicker.value = data.color
            
            this.form.appendChild(colorpicker)
            this.addLabel(data.title)
            this.addLineBreak()

            this.inputs[data.id] = colorpicker
            return colorpicker
        }
    }
    
    addButton(text: string = 'Button', clickHandler?: (this: SettingsSection, e: SettingsSection) => void): HTMLButtonElement {
        const Button: HTMLButtonElement = document.createElement('button')
        Button.textContent = text
        Button.classList.add('flat')
        this.form.appendChild(Button)

        if (typeof clickHandler === 'function')
            Button.addEventListener('click', clickHandler.bind(this, this))

        return Button

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
    
    addSaveButton(data: SaveButtonData) {
        const submitBtn = this.addSubmitButton('Save')
        this.dataManager = data.dataManager
        this.savedName = this.name.replace(/\s/g, '')

        // if (data.loadSavedSettings) this.setValues(data.dataManager.getKey(saveName) || {})

        submitBtn.onclick = () => {
            data.dataManager.setKey(this.savedName, this.getValues())
            if (data.showSaveMessage || true){
                new Popup(`Saved "${ this.name }".`, 'Data Manager').show()
                location.reload()
            }
        }

        return submitBtn
    }

    get<T>(fieldName: string, suffix: string = 'auto'): T {
        if (suffix === 'auto') {
            for (const suffix of Object.values(Suffixes)) {
                if (this.exists(this.setNameSuffix(fieldName, suffix)))
                    fieldName = this.setNameSuffix(fieldName, suffix)
            }
        } else {
            fieldName = this.setNameSuffix(fieldName, suffix)
        }

        if(this.exists(fieldName))
            return this.getValueFromInput(this.inputs[fieldName]) as any as T
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
                input.checked = value || false
                break;
            default:
                input.value = value || ""
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

    load_data() {
        if (this.dataManager != null && this.dataManager.getKey(this.savedName) != null) {
            this.setValues(this.dataManager.getKey(this.savedName))
        }
    }
}