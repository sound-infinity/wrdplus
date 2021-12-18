import { loadItem } from "../storage"
import { Sections } from "./sections-model"

export function getDefaultValue(storage: string, key: string) {
    if (storage in Sections) {
        if (key in Sections[storage]) return Sections[storage][key]["defaultValue"]
    }
}
export function getSavedValue(storage: string, key: string) {
    const item = loadItem(storage)
    if (item != null && item[key]) return item[key]
    else return getDefaultValue(storage, key)
}

export function select(storage: string) {
    return (key: string) => getSavedValue(storage, key)
}
