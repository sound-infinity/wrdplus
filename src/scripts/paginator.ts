import { Paginator } from "../modules/wearedevs-lib/paginator"
import { easyLoad } from "./settings"
import { DB_FEATURES } from "./settings/constants"

function try_run() {
    switch (document.readyState) {
        case "complete":
            Paginator()
            break
        case "interactive":
            Paginator()
            break
        default:
            return false
    }
}

easyLoad.getSavedValue(DB_FEATURES, "better_paginator").then((value) => {
    if (value === true) {
        if (!try_run()) document.addEventListener("readystatechange", () => try_run())
    }
})
