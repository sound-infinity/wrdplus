interface IThemeInput {
    inputElement: HTMLInputElement
    isEnabled: boolean
    oninput: (this: GlobalEventHandlers, ev: Event) => any
}

export const darkTheme: IThemeInput = {
    get inputElement(): HTMLInputElement {
        return document.querySelector('.switch>input#themer')
    },
    get isEnabled() {
        if (this.inputElement != null) return this.inputElement.checked;
    },
    set isEnabled(enabled:boolean) {
        if (this.inputElement != null) this.inputElement.checked = enabled
    },
    set oninput(handler: (this: GlobalEventHandlers, ev: Event) => any) {
        if (this.inputElement != null) (this as IThemeInput).inputElement.oninput = handler
    }
}

export default { darkTheme }