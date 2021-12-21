import { SectionInputType, SettingsSection } from "../../modules/wearedevs-lib"
import { loadItem, setItem } from "../storage"
import { IInstanceData } from "./@types/IInstanceData"
import { InstanceList } from "./@types/InstanceList"
import { InstanceListOfValues } from "./@types/InstanceListOfValues"
import { OptionList } from "./OptionList"

export function loadSectionInstances(section: SettingsSection, options: OptionList) {
    const instances: InstanceList = {}

    for (const option of Object.values(options)) {
        switch (option.inputType) {
            case SectionInputType.Checkbox:
                {
                    const element = section.addCheckbox(option.title, option.id)
                    if (typeof option.defaultValue === "boolean") {
                        element.checked = option.defaultValue
                    }
                    if (typeof option.description === "string") {
                        if (element.parentNode != null) {
                            const parent = <HTMLAnchorElement>element.parentNode
                            parent.setAttribute("title", option.description)
                        }
                    }
                    instances[option.id] = {
                        element: element,
                        optionData: option
                    }
                }
                break
            case SectionInputType.TextField:
                {
                    const element = section.addTextbox(option.title, option.id)
                    if (typeof option.defaultValue === "string") {
                        element.value = option.defaultValue
                    }

                    if (typeof option.description === "string") {
                        // if (element.parentNode != null) {
                        element.placeholder = option.description
                        // const parent = <HTMLAnchorElement>element.parentNode
                        // parent.setAttribute("title", option.description)

                        // }
                    }
                    instances[option.id] = {
                        element: element,
                        optionData: option
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

export function loadInstancesFromSaved(storage: string, instances: { [id: string]: IInstanceData }) {
    const res = loadItem(storage)
    for (const id in res) {
        const instance = instances[id]
        if (instance == null) continue

        switch (instance.optionData.inputType) {
            case SectionInputType.Checkbox:
                instance.element.checked = res[id] // || instance.optionData.defaultValue
                break
            case SectionInputType.TextField:
                instance.element.value = res[id] // || instance.optionData.defaultValue
                break
        }
    }
    setItem(storage, indexInstancesValues(instances))

    return res
}
