let NotiFrame: HTMLDivElement;
let NotiStacks: HTMLDivElement;

function getNotiStacks() {
  if (NotiStacks == null) {
    NotiStacks = document.createElement("div");
    NotiStacks.className = "notif stacks";
    getNotiFrame().appendChild(NotiStacks);
  }
  return NotiStacks;
}

function getNotiFrame() {
  if (NotiFrame == null) {
    NotiFrame = document.createElement("div");
    NotiFrame.className = "notif frame";
    document.body.appendChild(NotiFrame);
  }
  return NotiFrame;
}

export class Notification {
  private elements: { [element: string]: HTMLElement } = {};
  public ondissmiss: (e: Notification) => void;

  constructor(
    message: string = "",
    title: string = "Notification",
    timeout: number = null
  ) {
    //this.elements.frame = document.createElement('div')
    this.elements.contents = document.createElement("div");
    this.elements.markContainer = document.createElement("div");
    this.elements.markDisplay = document.createElement("span");
    this.elements.title = document.createElement("div");
    this.elements.messageContainer = document.createElement("div");
    this.elements.messageDisplay = document.createElement("p");

    //this.elements.frame.className = 'notif frame'
    this.elements.contents.className = "notif contents theme2 round outline";
    this.elements.markDisplay.className = "notif mark";
    this.elements.title.className = "notif title outline round";
    this.elements.messageContainer.className = "notif outline round";
    this.elements.messageDisplay.className = "notif message";

    //this.elements.frame.appendChild(this.elements.contents)

    this.elements.contents.appendChild(this.elements.markContainer);
    this.elements.markContainer.appendChild(this.elements.markDisplay);
    this.elements.contents.appendChild(this.elements.title);
    this.elements.messageContainer.appendChild(this.elements.messageDisplay);
    this.elements.contents.appendChild(this.elements.messageContainer);

    this.elements.markDisplay.textContent = "WRD+";

    this.elements.title.textContent = title;
    this.elements.messageDisplay.innerHTML = message;

    getNotiStacks().appendChild(this.elements.contents);

    if (typeof timeout === "number") {
      setTimeout(() => {
        this.dismiss();
      }, timeout);
    }
  }

  set title(text: string) {
    this.elements.title.textContent = text;
  }

  get title(): string {
    return this.elements.title.textContent;
  }

  dismiss() {
    this.elements.contents.setAttribute("hidden", "true");

    setTimeout(() => this.instantDismiss(), 1000);
  }

  instantDismiss() {
    this.elements.contents.remove();
    if (typeof this.ondissmiss === "function") {
      this.ondissmiss.call(this, this);
    }
  }
}

export class WRD_Notification {
  public title: string = "WRD+";
  public message: string = "Hello World!";
  constructor() {
    const x = new Notification();
  }
}
