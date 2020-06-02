import { SearchThreadAsync, ThreadQuery } from "./modules/wrd-lib"
import DataManager from "./modules/data-manager"

const DM = new DataManager("wrdplus-test")

SearchThreadAsync(new ThreadQuery("Hello World")).then(searchResults => {
    console.log(searchResults.GetThreadById(11795))
})