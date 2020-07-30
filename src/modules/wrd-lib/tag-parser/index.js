import { LinkType } from '../enums'
import { CheckReplyList } from './utils'


function callback(mutationList) {
    for (const mutation of mutationList) {
        if (mutation.type == "childList") {
            CheckReplyList(document.querySelectorAll(".activitycard > div")) // mutation.addedNodes);
        }
    }
}

export default function CheckPage() {
    if (LinkType.getLinkType(location.href) === LinkType.PROFILE) {
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