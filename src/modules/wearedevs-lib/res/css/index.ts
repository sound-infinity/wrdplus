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

const sheets: HTMLStyleElement[] = []

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

function main() {
    RemoveSheets()
    InsertSheet(default_sheet)
    InsertSheet(notifications_sheet)
    InsertSheet(popups_sheet)
    InsertSheet(settings_sheet)

    switch (getThemeMode()) {
        case ThemeMode.Light:
            InsertSheet(notifications_light_sheet)
            // InsertSheet(settings_light_sheet)
            break
        case ThemeMode.Night:
            InsertSheet(notifications_dark_sheet)
            InsertSheet(settings_dark_sheet)
            break

        default:
            break
    }
}

main()
document.addEventListener("themechanged", () => main())
