import { SectionInputType, SettingsSection } from "../../modules/wearedevs-lib"
import { loadItem } from "../storage"
import { IInstanceData } from "./@types/IInstanceData"
import { InstanceList } from "./@types/InstanceList"
import { InstanceListOfValues } from "./@types/InstanceListOfValues"
import { OptionList } from "./OptionList"

export async function loadInstancesFromSaved(storage: string, instances: { [id: string]: IInstanceData }) {
    const res = await loadItem(storage)
    for (const id in res) {
        const instance = instances[id]
        switch (instance.optionData.inputType) {
            case SectionInputType.Checkbox:
                instance.element.checked = res[id]
                break
            case SectionInputType.TextField:
                instance.element.value = res[id]
                break
        }
    }
    return res
}

export function loadSectionInstances(section: SettingsSection, options: OptionList) {
    const instances: { [id: string]: IInstanceData } = {}

    for (const option of Object.values(options)) {
        switch (option.inputType) {
            case SectionInputType.Checkbox:
                {
                    const element = section.addCheckbox(option.title, option.id)
                    instances[option.id] = {
                        element: element,
                        optionData: option,
                    }
                }
                break
            case SectionInputType.TextField:
                {
                    const element = section.addTextbox(option.title, option.id)
                    instances[option.id] = {
                        element: element,
                        optionData: option,
                    }
                }
                break
        }
    }
    return instances
}

export function indexInstancesValues(instances: InstanceList) {
    const data: InstanceListOfValues = {}
    for (const instance of Object.values(instances)) {
        switch (instance.optionData.inputType) {
            case SectionInputType.Checkbox:
                {
                    const element = instance.element
                    const id = instance.optionData.id
                    if (typeof id === "string") data[id] = element.checked
                }
                break
            case SectionInputType.TextField:
                {
                    const element = instance.element
                    const id = instance.optionData.id
                    if (typeof id === "string") data[id] = element.value
                }
                break
        }
    }
    return data
}
