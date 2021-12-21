import { SectionInputType } from "../../../modules/wearedevs-lib"

export interface IOptionData {
    id: string
    title: string
    inputType: SectionInputType
    defaultValue?: string | boolean | number
    description?: string
}
