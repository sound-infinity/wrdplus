import { AddExternalSheet, ExternalSheetType } from "../../modules/wearedevs-lib"
import { DB_THEME_MODIFICATIONS } from "../settings/constants"
import CssBackgroundImage from "./res/background-image.css"
import { IScriptInfo, ScriptHandlerArgs, scripts } from "./scripts"
import * as easyLoad from "../settings/easy-load"
import { Sections } from "../settings/sections-model"

AddExternalSheet(CssBackgroundImage, ExternalSheetType.General)

function script_try_run(info: IScriptInfo, value: ScriptHandlerArgs, sectionId: string) {
    if (document.readyState === info.runAt) {
        try {
            info.handler(value, sectionId)
        } finally {
            return true
        }
    }
    return false
}

// function try_run() {
for (const fieldId in Sections[DB_THEME_MODIFICATIONS]) {
    const value = easyLoad.getSavedValue(DB_THEME_MODIFICATIONS, fieldId)
    switch (value) {
        case false:
        case undefined:
        case null:
            break
        default:
            const scriptInfo = scripts[fieldId]
            if (scriptInfo == null) break

            if ((<IScriptInfo>scriptInfo)["runAt"] != null) {
                const run = () => script_try_run(<IScriptInfo>scriptInfo, value, DB_THEME_MODIFICATIONS)
                if (run() === false) document.addEventListener("readystatechange", run)
            } else {
                for (const info of <IScriptInfo[]>scriptInfo) {
                    const run = () => script_try_run(<IScriptInfo>info, value, DB_THEME_MODIFICATIONS)
                    if (run() === false) document.addEventListener("readystatechange", run)
                }
            }
            break
    }
}
// }
