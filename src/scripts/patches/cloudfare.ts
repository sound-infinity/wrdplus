import { SiteNotification } from "../../modules/wearedevs-lib"

// 404 WebPage
if (document.title.match("^Page doesn't exist!") && location.search.match("jschl")) {
    const queries = new URLSearchParams(location.search)
    queries.delete("__cf_chl_jschl_tk__")
    location.search = `?${queries.toString()}`

    const notif = new SiteNotification()
    notif.message = "Reloading page..."
    notif.render()
}
