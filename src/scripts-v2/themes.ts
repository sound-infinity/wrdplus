import { IOnSectionLoad } from "./settings/IOnSectionLoad"

document.addEventListener("sectionload", (e: CustomEvent | Event): void => {
    const detail = (<CustomEvent<IOnSectionLoad>>e).detail
    console.log(detail)
})
