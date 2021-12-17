import GeneralThreadModSheet from "./res/general.style.css"
import { appendMenuAction, createMenuAction, setMenuStatus } from "../../../modules/wearedevs-lib/navbar/account/utils"
import { InsertSheet, SettingsForm } from "../../../modules/wearedevs-lib"

export function initialize(form: SettingsForm) {
    InsertSheet(GeneralThreadModSheet, undefined, true)
    setMenuStatus(true)
    const wrdplus_settings = createMenuAction("WRD+", "wrdplus")
    if (wrdplus_settings) {
        const action = appendMenuAction(wrdplus_settings)
        if (action)
            action.onclick = (ev: MouseEvent) => {
                form.render()
                ev.preventDefault()
            }
    }
}
