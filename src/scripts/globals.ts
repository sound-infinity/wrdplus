import { SearchResults } from '../modules/wrd-lib/classes'
import DataManager from '../modules/data-manager'

export const DataStorage: DataManager = new DataManager('wrdplus-test')
export const LatestThreads: SearchResults = new SearchResults()

//@ts-expect-error
export const _VERSION: number = GM_info.script.version

DataStorage.setKey('startups', (DataStorage.getKey('startups') ? DataStorage.getKey('startups') : -1) + 1)