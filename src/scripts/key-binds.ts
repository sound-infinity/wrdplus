import { getLinkType, LinkType, getThreadIdFromUrl } from '../modules/wrd-lib'

enum KeyStates {
    Up,
    Down
}

const Keys: any = {}

function gotoToNextOrPrevThread(increase: boolean) {
    let threadId: number = getThreadIdFromUrl()
    if(increase) {
        threadId++;
    } else {
        threadId--;
    }
    location.pathname = location.pathname.replace(/[0-9]+/g, threadId.toString())
}

function OnKeyEvent(e: KeyboardEvent, kstate: KeyStates) {
    Keys[e.keyCode] = kstate
    const PageType = getLinkType()

    switch (e.keyCode) {
        case 190: // . or >
            if (e.altKey && PageType === LinkType.Thread && kstate === KeyStates.Up) {
                gotoToNextOrPrevThread(true)
            }
            break;
        case 188: // , or <
            if (e.altKey && PageType === LinkType.Thread && kstate === KeyStates.Up) {
                gotoToNextOrPrevThread(false)
            }
            break;
        default:
            break;
    }
}

addEventListener('keydown', (e: KeyboardEvent) => {
    OnKeyEvent(e, KeyStates.Down)

})

addEventListener('keyup', (e: KeyboardEvent) => {
    OnKeyEvent(e, KeyStates.Up)
})

