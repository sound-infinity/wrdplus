import notifications_sheet from "./default/notifications.style.css"
import settings_sheet from "./default/settings.style.css"
import default_sheet from "./default/default.style.css"
import popups_sheet from "./default/popups.style.css"
// Dark
import notifications_dark_sheet from "./dark/notifications.style.css"
import settings_dark_sheet from "./dark/settings.style.css"
//Light
import notifications_light_sheet from "./light/notifications.style.css"
import settings_light_sheet from "./light/settings.style.css"

import { ThemeMode, getThemeMode } from "../../utils/website-theme"

enum SheetDestination {
    Head = 1,
    Body,
}

export enum ExternalSheetType {
    Dark = 1,
    Light,
    General,
}

const sheets: HTMLStyleElement[] = []
const externalSheets: Record<string, string[]> = {
    dark: [],
    light: [],
    general: [],
}

function RemoveSheets() {
    for (const sheet of sheets) {
        sheet.remove()
    }
}
export function InsertSheet(sourceCode: string, destination: SheetDestination = SheetDestination.Head, anonymous = false) {
    const sheet = document.createElement("style")
    sheet.textContent = sourceCode
    if (!anonymous) sheets.push(sheet)
    switch (destination) {
        case SheetDestination.Head:
            if (document.head != null) {
                document.head.appendChild(sheet)
            } else {
                document.addEventListener("readystatechange", () => {
                    if (document.head != null) {
                        document.head.appendChild(sheet)
                    }
                })
            }
            break
        case SheetDestination.Body:
            if (document.head != null) {
                document.head.appendChild(sheet)
            } else {
                document.addEventListener("readystatechange", () => {
                    if (document.head != null) {
                        document.head.appendChild(sheet)
                    }
                })
            }
            break
        default:
            break
    }
}

export function AddExternalSheet(sourceCode: string, sheetType: ExternalSheetType) {
    switch (sheetType) {
        case ExternalSheetType.Dark:
            externalSheets.dark.push(sourceCode)
            break
        case ExternalSheetType.Light:
            externalSheets.light.push(sourceCode)
            break
        case ExternalSheetType.General:
            externalSheets.general.push(sourceCode)
            break
    }
    main()
}

function main() {
    RemoveSheets()
    InsertSheet(default_sheet)
    InsertSheet(notifications_sheet)
    InsertSheet(popups_sheet)
    InsertSheet(settings_sheet)
    for (const sourceCode of externalSheets["general"]) InsertSheet(sourceCode)

    switch (getThemeMode()) {
        case ThemeMode.Light:
            InsertSheet(notifications_light_sheet)
            for (const sourceCode of externalSheets["light"]) InsertSheet(sourceCode)
            break
        case ThemeMode.Night:
            InsertSheet(notifications_dark_sheet)
            InsertSheet(settings_dark_sheet)
            for (const sourceCode of externalSheets["dark"]) InsertSheet(sourceCode)
            break

        default:
            break
    }
}

main()
document.addEventListener("themechanged", () => main())
