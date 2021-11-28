export function isLightModeActive() {
    const element = document.querySelector<HTMLInputElement>("#themer")
    if (element != null) {
        return element.checked
    } else {
    }
}
