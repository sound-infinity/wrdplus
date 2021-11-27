import HtmlNotification from "./notification.html";
import { getNotiStacks } from "./notification-utils";
import { SiteDialog } from "../dialog";

export class SiteNotification extends SiteDialog {
  public render() {
    if (this.contents != null) getNotiStacks().appendChild(this.contents);
  }

  constructor() {
    super();
    const template = document.createElement("div");
    template.innerHTML = HtmlNotification;
    this.contents = template.firstElementChild as HTMLDivElement;
  }

  //#region properties
  public set mark(text: string | null) {
    const element = this.contents?.querySelector("span.notif.mark");
    if (element) element.textContent = text;
  }

  public get mark(): string | null {
    const element = this.contents?.querySelector("span.notif.mark");
    if (element) element.textContent;

    return null;
  }

  public get title(): string | null {
    const element = this.contents?.querySelector("div.notif.title");
    if (element != null) element.textContent;
    return null;
  }
  public set title(text: string | null) {
    const element = this.contents?.querySelector("div.notif.title");
    if (element != null) element.textContent = text;
  }

  public get message(): string | null {
    const element = this.contents?.querySelector("p.notif.message");
    if (element != null) element.textContent;
    return null;
  }
  public set message(text: string | null) {
    const element = this.contents?.querySelector("p.notif.message");
    if (element != null) element.textContent = text;
  }
  //#endregion

  public dismiss() {
    this.contents?.setAttribute("hidden", "true");
    setTimeout(() => this.remove(), 1000);
  }
}
