import SettingsSection from './settings-section'

export default class SettingsForm {
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

        this.elements.closeButton.addEventListener('click', this.remove.bind(this))
    }
    /**
     * Creates a section to add input fields 
     * @returns {SettingsSection}
     */
    addSection() {
        return new SettingsSection(this, ...arguments)
    }
    /**
     * Adds a heading within the container
     * @param {string} text 
     */
    addHeading(text = 'HEADING') {
        const heading = document.createElement('span')
        heading.innerText = text
        heading.classList.add('middle', 'heading')
        this.elements.center.appendChild(heading)
    }
    /**
     * Appends settings panel to the body of the document
     */
    show() {
        if (document.readyState === 'complete')
            document.body.appendChild(this.elements.main)
    }
    /**
     * Removes the whole settings panel
     */
    remove() {
        this.elements.main.remove()
    }
    toggle() {
        if (this.elements.main.parentNode === document.body) {
            this.remove()
        } else {
            this.show()
        }
    }
}