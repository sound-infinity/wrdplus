import { getCookie } from "./data-extractor"

export enum ThemeMode {
    Unknown = 0,
    Light,
    Night,
}

function getThemeModeFromThemer(): ThemeMode | null {
    const element = document.querySelector<HTMLInputElement>("#themer")
    if (element != null) {
        return element.checked ? ThemeMode.Light : ThemeMode.Night
    }
    return null
}

function getThemeModeFromCookie(): ThemeMode {
    const cookieValue = getCookie("wrdtheme")
    if (cookieValue != null) {
        switch (cookieValue) {
            case "night":
                return ThemeMode.Night
            case "light":
                return ThemeMode.Light
            default:
                return ThemeMode.Unknown
        }
    }
    return ThemeMode.Unknown
}

export function getThemeMode() {
    const themerOutput = getThemeModeFromThemer()
    return themerOutput ? themerOutput : getThemeModeFromCookie()
}

const ThemeChangedEvent = new CustomEvent("themechanged", {
    detail: {
        get themeMode() {
            return getThemeMode()
        },
    },
})

function init_EventDispatcher() {
    const element = document.querySelector<HTMLInputElement>("#themer")
    if (element != null) {
        document.dispatchEvent(ThemeChangedEvent)
        element.addEventListener("input", () =>
            document.dispatchEvent(ThemeChangedEvent)
        )
    }
}

if (document.readyState == "complete") init_EventDispatcher()
else {
    document.addEventListener("readystatechange", () => {
        if (document.readyState == "complete") init_EventDispatcher()
    })
}
