import { getLinkType, getQueries } from "./page";
import { LinkType } from "../enums";
// DIV#paginator

let currentIndex: number = 0
let maxIndex: number = 0

function lookForIndexDisplay() {
    const paginator = getPaginator()
    if (!paginator) return
    for (const children of Object.values(paginator.children)) {
        if(parseInt(children.textContent)) {
            return children
        }
    }
}

function getVariables() {
    const paginator = getPaginator()
    if (!paginator) return
    const gotoEndBtn = (paginator.lastElementChild as HTMLButtonElement)
    if (gotoEndBtn && gotoEndBtn.onclick) maxIndex = parseInt(gotoEndBtn.onclick.toString().match(/'([0-9]+)'/)[1])
    else maxIndex = parseInt(getQueries()['page'])
    currentIndex = parseInt(lookForIndexDisplay().textContent)
}

function getPaginator(): HTMLDivElement {
    if (getLinkType() == LinkType.Section) {
        return document.querySelector("#paginator")
    }
}

function appendButton(text: string, onclick: (e: MouseEvent)=>any, prepend=false) {
    const paginator = getPaginator()
    if (!paginator) return
    const btn = document.createElement("span")
    btn.textContent = text
    btn.onclick = onclick
    
    if(prepend) paginator.insertBefore(btn, paginator.firstChild)
    else paginator.appendChild(btn)
}

getVariables()

export default { appendButton, maxIndex, currentIndex }