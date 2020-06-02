import { SearchThreadAsync, SearchThreadSync, ThreadQuery } from "./modules/wrd-lib"
import DataManager from "./modules/data-manager"

const DM = new DataManager("wrdplus-test")

console.log(SearchThreadSync("hello"))