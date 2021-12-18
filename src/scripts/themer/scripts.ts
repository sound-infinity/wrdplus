import { createImage } from "./utils"
import * as easyLoad from "../settings/easy-load"
import svgToMiniDataURI from "mini-svg-data-uri"
import { DB_THEME_MODIFICATIONS } from "../settings/constants"
export type ScriptHandlerArgs = boolean | string | null

export interface IScriptInfo {
    handler: (value?: ScriptHandlerArgs, sectionId?: string) => void
    runAt: DocumentReadyState
}

export const scripts: Record<string, IScriptInfo | IScriptInfo[]> = {
    custom_background: {
        runAt: "interactive",
        handler: <T>(value?: T) => {
            if (typeof value === "string") {
                const select = easyLoad.select(DB_THEME_MODIFICATIONS)
                if (select("custom_background_enabled") === true) {
                    if (select("custom_background_asSVG") === true) {
                        const elements = createImage()
                        elements.image.setAttribute("src", svgToMiniDataURI(value))
                        document.body.insertBefore(elements.container, document.body.firstChild)
                    } else {
                        const elements = createImage()
                        elements.image.setAttribute("src", value)
                        document.body.insertBefore(elements.container, document.body.firstChild)
                    }
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
