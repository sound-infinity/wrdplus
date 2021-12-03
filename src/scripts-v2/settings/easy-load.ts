import { loadItem } from "../storage"
export async function getSavedValue(storage: string, key: string) {
    const item = await loadItem(storage)
    console.log(storage)
    console.log(item)
    if (item != null && item[key]) return item[key]
    return null
}
