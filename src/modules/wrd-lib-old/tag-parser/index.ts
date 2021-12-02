import { getLinkType, insertExternalScript } from '../utils'
import { LinkType } from '../enums'
import { CheckReplyList } from './utils'

//insertExternalScript('https://cdn.jsdelivr.net/npm/showdown@1.9.0/dist/showdown.min.js')

function callback(mutationList: MutationRecord[]): void {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            CheckReplyList(document.querySelectorAll('.activitycard > div'))
        }
    }
}

export default function revisePage() {
    if (getLinkType() === LinkType.Profile) {
        CheckReplyList(document.querySelectorAll('.activitycard > div') as NodeListOf<HTMLDivElement>)
        new MutationObserver(callback).observe(document.querySelector('.activitycards') as HTMLDivElement, { childList: true })
    } else {
        CheckReplyList(document.querySelectorAll(".thread_replycontent") as NodeListOf<HTMLDivElement>);
    }
}