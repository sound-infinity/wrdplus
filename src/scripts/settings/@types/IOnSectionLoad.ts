import { SettingsSection } from "../../../modules/wearedevs-lib"
import { InstanceListOfValues } from "./InstanceListOfValues"

export declare interface IOnSectionLoad {
    sectionId: string
    section: SettingsSection
    values: InstanceListOfValues
}
