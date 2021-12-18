import { SiteNotification } from "../../modules/wearedevs-lib"

function isAnErrorPage() {
    return document.title.match("^Page doesn't exist!") && location.search.match("jschl")
}

function deleteFaultyQueries() {
    const queries = new URLSearchParams(location.search)
    queries.delete("__cf_chl_jschl_tk__")
    return queries
}

function notifyRedirect() {
    const notif = new SiteNotification()
    notif.message = "Reloading page..."
    notif.render()
}

function doRedirect(queries: URLSearchParams) {
    location.search = `?${queries.toString()}`
}

export function initialize() {
    if (isAnErrorPage()) {
        const queries = deleteFaultyQueries()
        if (queries == null) return
        notifyRedirect()
        doRedirect(queries)
    }
}
