import { getLinkType, insertExternalScript } from '../utils'
import { LinkType } from '../enums'
import { CheckReplyList } from './utils'

//insertExternalScript('https://cdn.jsdelivr.net/npm/showdown@1.9.0/dist/showdown.min.js')

function callback(mutationList) {
    for (const mutation of mutationList) {
        if (mutation.type == "childList") {
            CheckReplyList(document.querySelectorAll(".activitycard > div")) // mutation.addedNodes);
        }
    }
}

export default function CheckPage() {
    if (getLinkType() === LinkType.PROFILE) {
        CheckReplyList(document.querySelectorAll(".activitycard > div"));
        try {
            const Container = document.querySelector("#activityfeed > .activitycards");
            const Observer = new MutationObserver(callback);

            Observer.observe(Container, { childList: true });
        } catch (errr) { }
    } else {
        CheckReplyList(document.querySelectorAll(".thread_replycontent"));
    }
}

