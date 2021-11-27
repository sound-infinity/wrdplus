// Code that runs before any other script, to setup items before they are used.
// ##########
// Recommended to import from direct sources

import { LinkType, getLinkType } from "../modules/wrd-lib-v2/utils/link-type"
//import { ExtraFeatures } from "./settings"

//#region ThreadAnchors
if (getLinkType() === LinkType.Section || getLinkType() === LinkType.Index) {
    //if (ExtraFeatures.get<boolean>("threadmarkings")) {
    const threadAnchors =
        document.querySelectorAll<HTMLAnchorElement>('a[href*="/forum/t"')
    for (let i = 0; i < threadAnchors.length; ++i) {
        const thread = threadAnchors[i]
        thread.setAttribute("state", "Waiting")
    }
    //}
}
//#endregion ThreadAnchors
