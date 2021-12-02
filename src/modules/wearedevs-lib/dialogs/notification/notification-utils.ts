let NotiFrame: HTMLDivElement;
let NotiStacks: HTMLDivElement;
export function getNotiStacks() {
  if (NotiStacks == null) {
    NotiStacks = document.createElement("div");
    NotiStacks.className = "notif stacks";
    getNotiFrame().appendChild(NotiStacks);
  }
  return NotiStacks;
}

export function getNotiFrame() {
  if (NotiFrame == null) {
    NotiFrame = document.createElement("div");
    NotiFrame.className = "notif frame";
    document.body.appendChild(NotiFrame);
  }
  return NotiFrame;
}
