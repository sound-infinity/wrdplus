import { SettingsForm } from "../form"
import HtmlSection from "./section.html"
import HtmlSectionTemplates from "./section-templates.html"

function parseHtml(htmlString: string): HTMLDivElement {
    const container = document.createElement("div")
    container.innerHTML = htmlString
    return container.firstElementChild as HTMLDivElement
}

function getTemplatesContainer(): HTMLElement {
    return parseHtml(HtmlSectionTemplates)
}

export class SettingsSection {
    contents: HTMLDivElement | null = null
    parentForm: SettingsForm | null = null

    constructor(form: SettingsForm) {
        this.contents = parseHtml(HtmlSection)
        this.parentForm = form
    }

    public render() {
        if (this.contents != null) {
            this.parentForm?.contents
                ?.querySelector(".settings-body")
                ?.appendChild(this.contents)

            this.contents?.addEventListener("submit", (e) => {
                e.preventDefault()
                return false
            })
        }
    }

    public addButton(text: string) {
        const element = document.createElement("button")
        element.textContent = text
        element.className = "flat"
        this.contents?.appendChild(element)
        return element
    }

    public addHeading(text: string) {
        const headingContainer =
            getTemplatesContainer().querySelector("#heading")?.firstElementChild

        if (headingContainer != null) {
            const heading = headingContainer.querySelector(
                ".settings-section-heading"
            )
            if (heading != null) {
                heading.textContent = text
            }
            this.contents?.appendChild(headingContainer)
        }
    }

    addTextbox(title: string, placeHolder = "", fillX = false) {
        //        if (!this.exists(data.id)) {
        const textbox = document.createElement("input")

        textbox.type = "text"
        //textbox.name = data.id
        textbox.placeholder = placeHolder

        if (fillX) textbox.style.width = "100%"

        this.addLabel(title)
        this.addLineBreak()
        this.contents?.appendChild(textbox)
        this.addLineBreak()

        //this.inputs[data.id] = textbox
        return textbox
        //        }
    }

    addLineBreak(): HTMLBRElement {
        const linebreak = document.createElement("br")
        this.contents?.appendChild(linebreak)
        return linebreak
    }

    addLabel(text: string): HTMLSpanElement {
        const label = document.createElement("span")
        label.textContent = text
        this.contents?.appendChild(label)
        return label
    }

    addCheckbox(title: string, name: string) {
        const checkbox = document.createElement("input")

        checkbox.name = name
        checkbox.type = "checkbox"
        //checkbox.checked = data.checked || false
        this.contents?.appendChild(checkbox)
        this.addLabel(title)
        this.addLineBreak()
        return checkbox
    }

    addSubmitButton(
        text = "Submit",
        clickHandler?: (this: SettingsSection, e: SettingsSection) => void
    ): HTMLInputElement {
        const submitBtn = document.createElement("input")

        submitBtn.value = text
        submitBtn.type = "submit"

        this.contents?.appendChild(submitBtn)

        if (typeof clickHandler === "function")
            submitBtn.addEventListener("click", clickHandler.bind(this, this))

        return submitBtn
    }
}
