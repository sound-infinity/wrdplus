import { DB, easyLoad } from "./settings"

easyLoad.getSavedValue(DB.DB_FEATURES, "thread_highlights").then((value) => {
    if (value === true) {
        console.log("yes")
    } else {
        console.log("NO!!!!!!")
    }
})

export {}
