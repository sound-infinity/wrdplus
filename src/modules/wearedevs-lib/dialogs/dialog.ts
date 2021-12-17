const dismissedEvent = new Event("dismissed")

export class SiteDialog {
    contents: HTMLDivElement | null = null
    set ondissmiss(callback: EventListenerOrEventListenerObject) {
        this.contents?.addEventListener("dismissed", callback)
    }
    public remove() {
        this.contents?.dispatchEvent(dismissedEvent)
        this.contents?.remove()
    }
}
