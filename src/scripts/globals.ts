import { searchThreadSync, Popup } from '../modules/wrd-lib'
import { SearchResults } from '../modules/wrd-lib/classes'
import DataManager from '../modules/data-manager'

export const DataStorage: DataManager = new DataManager('wrdplus-test')
export const LastestThreads: SearchResults = new SearchResults()
//@ts-ignore
export const Info: Popup = new Popup()

export function isFirstRun(): boolean {
    return (DataStorage.getKey('startups') || 0) < 1
}

DataStorage.setKey('startups', (DataStorage.getKey('startups') ? DataStorage.getKey('startups') : -1) + 1)

console.log(isFirstRun(), DataStorage.getKey('startups'))