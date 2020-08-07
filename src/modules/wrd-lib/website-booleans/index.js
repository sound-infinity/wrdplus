export const darkTheme = {
    get inputElement() {
        return document.querySelector('.switch>input#themer') || {}
    },
    get isEnabled() {
        return this.inputElement.checked;
    },
    set isEnabled(enabled = true) {
        this.inputElement.checked = enabled
    },
    set oninput(handler) {
        this.inputElement.oninput = handler
    }
}

export default { darkTheme }