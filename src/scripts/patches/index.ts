import { initialize as initialize_mentionsFix } from "./mentions"
import { initialize as initialize_cloudfareFix } from "./cloudfare"
import { initialize as initialize_searchBarFix } from "./searchbar"

function try_run() {
    switch (document.readyState) {
        case "complete":
            break
        case "interactive":
            initialize_mentionsFix()
            initialize_searchBarFix()
            break
        case "loading":
            initialize_cloudfareFix()
            break
        default:
            break
    }
}

try_run()
document.addEventListener("readystatechange", () => try_run())

export {}
