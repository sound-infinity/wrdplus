import CssDisableSignatures from "./res/general.style.css"
import { easyLoad } from "../settings"
import { DB_FEATURES } from "../settings/constants"
import { loadStyle } from "../themer/utils"

if (easyLoad.getSavedValue(DB_FEATURES, "disable_signatures") === true) {
    loadStyle(CssDisableSignatures)
}
