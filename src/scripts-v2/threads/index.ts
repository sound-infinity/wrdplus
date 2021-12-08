import "./threads"
import GeneralThreadModSheet from "./res/general.style.css"
import LightThreadModSheet from "./res/light.style.css"
import DarkThreadModSheet from "./res/dark.style.css"

import { AddExternalSheet, ExternalSheetType, InsertSheet } from "../../modules/wearedevs-lib"

InsertSheet(GeneralThreadModSheet, undefined, true)

AddExternalSheet(LightThreadModSheet, ExternalSheetType.Light)
AddExternalSheet(DarkThreadModSheet, ExternalSheetType.Dark)
