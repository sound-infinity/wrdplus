import { searchThreadSync, Popup } from '../modules/wrd-lib'
import { SearchResults } from '../modules/wrd-lib/classes'
import DataManager from '../modules/data-manager'

export const DataStorage: DataManager = new DataManager('wrdplus-test')
export const LastestThreads: SearchResults = new SearchResults()
export const Info: Popup = new Popup(undefined, undefined, false)

export function isFirstRun(): boolean {
    return (DataStorage.getKey('startups') || 0) < 1
}

//@ts-expect-error
export const _VERSION: number = GM_info.script.version

DataStorage.setKey('startups', (DataStorage.getKey('startups') ? DataStorage.getKey('startups') : -1) + 1)