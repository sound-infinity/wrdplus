const dismissedEvent = new Event("dismissed");

export class SiteDialog {
  contents: HTMLDivElement | null = null;
  set ondissmiss(callback: EventListenerOrEventListenerObject) {
    this.contents?.addEventListener("dismissed", callback);
  }
  remove() {
    this.contents?.remove();
    this.contents?.dispatchEvent(dismissedEvent);
  }
}
