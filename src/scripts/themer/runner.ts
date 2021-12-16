import { AddExternalSheet, ExternalSheetType } from "../../modules/wearedevs-lib"
import { DB_THEME_MODIFICATIONS } from "../settings/constants"
import { IOnSectionLoad } from "../settings/IOnSectionLoad"
import CssBackgroundImage from "./res/background-image.css"
import { IScriptInfo, ScriptHandlerArgs, scripts } from "./scripts"

AddExternalSheet(CssBackgroundImage, ExternalSheetType.General)

function script_try_run(info: IScriptInfo, value: ScriptHandlerArgs, detail: IOnSectionLoad) {
    if (document.readyState === info.runAt) {
        try {
            info.handler(value, detail)
        } finally {
            return true
        }
    }
    return false
}

document.addEventListener("sectionload", (e: CustomEvent | Event): void => {
    const detail = (<CustomEvent<IOnSectionLoad>>e).detail
    if (detail.sectionId === DB_THEME_MODIFICATIONS) {
        for (const fieldId in detail.values) {
            const value = detail.values[fieldId]
            switch (typeof value) {
                case "boolean":
                    if (value === false) break
                default:
                    const scriptInfo = scripts[fieldId]
                    if (scriptInfo == null) break

                    if ((<IScriptInfo>scriptInfo)["runAt"] != null) {
                        const run = () => script_try_run(<IScriptInfo>scriptInfo, value, detail)
                        if (run() === false) document.addEventListener("readystatechange", run)
                    } else {
                        for (const info of <IScriptInfo[]>scriptInfo) {
                            console.log({ info: info, value: value, detail: detail })
                            const run = () => script_try_run(<IScriptInfo>info, value, detail)
                            if (run() === false) document.addEventListener("readystatechange", run)
                        }
                    }
                    break
            }
        }
    }
})
