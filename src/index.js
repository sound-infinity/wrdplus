import wrdlib from "./modules/wrd-lib"
import DataManager from "./modules/data-manager"

const DM = new DataManager("wrdplus-test")

wrdlib.SearchThreadsAsync([
    "Read This If you were falsely repped by ClassicCat",
    "invalidly -repped by you-know-who (classiccat)"
])
    .then(searchResults => {
        console.log(searchResults.collection)
    })