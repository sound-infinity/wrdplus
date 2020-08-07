export default class Category {
    constructor(name = 'default') {
        this.isEnabled = false
        this.containerClass = `${name}-style`
    }
    select() {
        return document.querySelectorAll(`head > style.${this.containerClass}`)
    }
    addStyle() {
        let lastStyle
        for (const source of arguments) {
            const style = document.createElement('style')
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
    enable() {
        this.isEnabled = true
        this.refresh()
    }
    disable() {
        this.isEnabled = false
        this.refresh()
    }
}