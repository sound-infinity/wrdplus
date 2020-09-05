// This includes bug or other type of fixes/improvements for the WRD website
import { Notification, LinkType, getLinkType, User, getUserInfoFromTag, getThreadIdFromUrl } from '../modules/wrd-lib'

// 404 Page
if (document.title.match("^Page doesn't exist!") && location.search.match('__cf_chl_jschl_tk__')) {
    location.search = location.search.replace(/__cf_chl_jschl_tk__=.*[&]|__cf_chl_jschl_tk__=.*/, '') // removes faulty query
    new Notification('Reloading page...')
    //location.reload()
} 

// Mention buttons
function makeMentionButton(user: User): HTMLAnchorElement {
    const btn = document.createElement('a')
    btn.className = 'theme1 border1 btnmention'
    btn.textContent = 'WRD+ Mention'
    btn.href = `/forum/t/${getThreadIdFromUrl()}/newreply?mention=${user.Id}`

    return btn
}

if (getLinkType() === LinkType.Thread) {
    document.querySelectorAll('div.thread_replierdata').forEach((userInfoContainer: HTMLDivElement) => {
        const desc: HTMLDivElement = userInfoContainer.querySelector('div.userdesc')
        if (desc == null) return
        if (desc.querySelector('.btnmention') != null) return

        const userInfoElement: HTMLAnchorElement = desc.querySelector('a[href*=profile]')
        if (userInfoElement == null) return

        const userInfo =  getUserInfoFromTag(userInfoElement)
        desc.appendChild(makeMentionButton(userInfo))
    })
}
