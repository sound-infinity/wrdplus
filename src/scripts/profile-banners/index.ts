import { SiteNotification } from "../../modules/wearedevs-lib/dialogs"
import { DB_FEATURES } from "../settings/constants"
import selectStorage from "../settings/easy-load"

function showBanner(uri: string, medias: HTMLDivElement) {
    if (medias.parentElement == null) return
    const banner_container = medias.parentElement.querySelector<HTMLDivElement>("div.border1 > div.theme1:nth-child(1)")
    if (banner_container == null) return
    banner_container.style.backgroundImage = `url(${uri})`
}

function getAccountWebsite(medias: HTMLDivElement) {
    const website = medias.querySelector<HTMLAnchorElement>('a[title*="Personal website"]')
    if (website == null || website.getAttribute("href") == null) return
    return website
}

function exception_invalidProtocol(protocol: string) {
    const message = new SiteNotification()
    message.message = `expected "${protocol}" for profile banner.`
    message.render()
}

function exception_invalidImageUri() {
    const message = new SiteNotification()
    message.message = `profile banner might not be an image uri. Omitting...`
    message.render()
}

function main() {
    switch (document.readyState) {
        case "interactive":
            const medias = document.querySelector<HTMLDivElement>("#medias")
            if (medias == null) return
            const website = getAccountWebsite(medias)
            if (website == null) return
            if (website.href == null) return
            if (website.pathname.match(/$.jpeg|$.gif|$.png|$.jpg/)) return exception_invalidImageUri()
            if (website.protocol != "https:") return exception_invalidProtocol("https")
            // if (website.pathname)
            showBanner(website.href, medias)
            break
        default:
            break
    }
}

export function initialize() {
    if (selectStorage(DB_FEATURES)("enable_profile_banners") === true) {
        main()
        document.addEventListener("readystatechange", () => main())
    }
}

initialize()
