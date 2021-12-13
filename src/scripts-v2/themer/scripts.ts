import { IOnSectionLoad } from "../settings/IOnSectionLoad"
import { createImage } from "./utils"

export type ScriptHandlerArgs = boolean | string | null

export interface IScriptInfo {
    handler: (value?: ScriptHandlerArgs, detail?: IOnSectionLoad) => void
    runAt: DocumentReadyState
}

export const scripts: Record<string, IScriptInfo | IScriptInfo[]> = {
    custom_background: {
        runAt: "interactive",
        handler: <T>(value?: T, detail?: IOnSectionLoad) => {
            if (typeof value === "string" && detail != null) {
                if (detail.values["custom_background_enabled"] === true) {
                    const elements = createImage()
                    elements.image.setAttribute("src", value)
                    document.body.insertBefore(elements.container, document.body.firstChild)
                }
            }
        },
    },
    wearedevs_logo_asImage: {
        runAt: "interactive",
        handler: () => {
            const logo = document.querySelector("#foologo")
            if (logo != null) {
                const icon = document.createElement("img")
                icon.setAttribute("style", "width:32px;height:32px;vertical-align:middle;margin:2px 0")
                icon.setAttribute("src", "/favicon.ico")
                logo.textContent = ""
                logo.appendChild(icon)
            }
        },
    },
}
