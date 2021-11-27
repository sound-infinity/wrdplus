import notifications_sheet from "./notifications.style.css"
import popups_sheet from "./popups.style.css"
import settings_sheet from "./settings.style.css"
import settings_dark_sheet from "./dark/settings.style.css"

enum SheetDestination {
    Head = 1,
    Body,
}

function InsertSheet(
    sourceCode: string,
    destination: SheetDestination = SheetDestination.Head
) {
    const sheet = document.createElement("style")
    sheet.textContent = sourceCode
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

InsertSheet(notifications_sheet)
InsertSheet(popups_sheet)
InsertSheet(settings_sheet)
InsertSheet(settings_dark_sheet)
