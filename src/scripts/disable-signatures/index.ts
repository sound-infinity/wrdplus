import CssDisableSignatures from "./res/general.style.css"
import { easyLoad } from "../settings"
import { DB_FEATURES } from "../settings/constants"
import { InsertSheet } from "../../modules/wearedevs-lib"

const value = easyLoad.getSavedValue(DB_FEATURES, "disable_signatures")
console.log({ value: value })
if (value === true) {
    InsertSheet(CssDisableSignatures, undefined, true)
}
