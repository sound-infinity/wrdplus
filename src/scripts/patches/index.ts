import { initializeMentionsFix } from "./mentions"

function try_run() {
    switch (document.readyState) {
        case "complete":
            break
        case "interactive":
            initializeMentionsFix()
            break
        default:
            break
    }
}

try_run()
document.addEventListener("readystatechange", () => try_run())

export {}
