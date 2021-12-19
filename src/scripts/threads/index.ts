import "./threads"
import GeneralThreadModSheet from "./res/general.style.css"
import LightThreadModSheet from "./res/light.style.css"
import DarkThreadModSheet from "./res/dark.style.css"

import { AddExternalSheet, ExternalSheetType } from "../../modules/wearedevs-lib"
import { loadStyle } from "../themer/utils"

loadStyle(GeneralThreadModSheet)

AddExternalSheet(LightThreadModSheet, ExternalSheetType.Light)
AddExternalSheet(DarkThreadModSheet, ExternalSheetType.Dark)
