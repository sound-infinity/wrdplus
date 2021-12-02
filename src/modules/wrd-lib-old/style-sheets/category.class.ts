export default class Category {
    public isEnabled: boolean = false
    public containerClass: string
    constructor(name: string = 'default') {
        this.containerClass = `${name}-style`
    }
    select(): NodeListOf<HTMLStyleElement> {
        return document.querySelectorAll(`head > style.${this.containerClass}`)
    }
    addStyle(arg?: any) {
        let lastStyle: HTMLStyleElement
        for (const source of arguments as unknown as string[]) {
            const style: HTMLStyleElement = document.createElement('style')
            style.className = this.containerClass
            style.innerHTML = source.toString()
            document.head.appendChild(style)
            lastStyle = style
        }
        if (lastStyle != null) lastStyle.onload = (() => this.refresh()).bind(this)
    }
    refresh() {
        this.select().forEach(style => style.sheet.disabled = !this.isEnabled)
    }
    enable(){
        this.isEnabled = true
        this.refresh()
    }
    disable(){
        this.isEnabled = false
        this.refresh()
    }
}