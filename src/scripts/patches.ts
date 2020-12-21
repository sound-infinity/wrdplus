// This script contains improvements or fixes for the WRD website.
import { LinkType, getLinkType, User, getUserInfoFromTag, getThreadIdFromUrl, getQueries, dialogs } from '../modules/wrd-lib'
import { OtherSettings } from './settings'

// 404 Page
if (document.title.match("^Page doesn't exist!") && location.search.match('jschl')) {
    const queries = getQueries()
    delete queries["__cf_chl_jschl_tk__"]
    location.href = queries.toString()
    dialogs.notification({description:'Reloading page...'})
} 

// Mention buttons
function createMentionButton(user: User): HTMLAnchorElement {
    const btn = document.createElement('a')
    btn.className = 'theme1 border1 btnmention'
    btn.textContent = OtherSettings.get<boolean>('devmode') ? 'WRD+ Mention' : 'Mention'
    btn.href = `/forum/t/${getThreadIdFromUrl()}/newreply?mention=${user.Id}`
    return btn
}

if (getLinkType() === LinkType.Thread) {
    const fixMentions = () => {
        document.querySelectorAll('div.thread_replierdata').forEach((userInfoContainer: HTMLDivElement) => {
            const userDescription = userInfoContainer.querySelector<HTMLDivElement>('div.userdesc')
            if (userDescription != null) {
                //Checks if there is a mention button already made.
                //Creates a new mention button.
                if (userDescription.querySelector('.btnmention') == null) {
                    const userInfoElement = userDescription.querySelector<HTMLAnchorElement>('a[href*=profile]')
                    if (userInfoElement == null) {
                        const userInfo =  getUserInfoFromTag(userInfoElement)
                        userDescription.appendChild(createMentionButton(userInfo))    
                    }
                }        
            }
        })    
    }

    if (document.readyState === 'complete') fixMentions()
    else {
        document.addEventListener('readystatechange', () => {
            if (document.readyState === 'complete') fixMentions()
        })
    }
}
