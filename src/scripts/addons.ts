import { getLocalUserId, getLinkType, LinkType, copyText, Notification } from "../modules/wrd-lib";

// Profile Url Copying
if (getLinkType() === LinkType.Profile) {
    const Info = document.querySelector('#info')
    const CopyBtn = document.createElement('button')
    CopyBtn.textContent = 'Copy Profile Link'
    CopyBtn.classList.add('round', 'button', 'theme2')
    CopyBtn.addEventListener('click', () => {
        copyText(`https://wearedevs.net/profile?uid=${getLocalUserId()}`)

        new Notification('Copied profile link to clipboard.', 'Addons', 1500)
    })
    Info.appendChild(CopyBtn)
}