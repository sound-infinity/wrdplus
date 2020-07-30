export const noti_list_selector = "#navigationbar > ul > li.navHeader_dropmenu.navbell div.notifications"
export const noti_count_selector = "#navigationbar > ul > li.navHeader_dropmenu.navbell > span.notifbell > span.notifcount"

export const NotiCount = {
    cached: {},
    get element() {
        let element = this.cached.element || document.querySelector(noti_count_selector)
        if (element == null) {
            element = document.createElement("span")
            element.classList.add('notifcount')
            element.innerText = '0'
            document.querySelector("#navigationbar > ul > li.navHeader_dropmenu.navbell > span.notifbell").appendChild(element)
        }
        this.cached.element = element
        return element
    },
    get value() {
        return parseInt(this.element.innerText)
    },
    set value(value = 0) {
        this.element.innerText = value
        UpdateNotificationContainer()
    }
}

export function GetNotificationsContainer() {
    let notis = document.querySelector(noti_list_selector);
    if (notis == null) {
        notis = document.createElement('div')
        notis.classList.add('notifications')
        document.querySelector('#navigationbar > ul > li.navHeader_dropmenu.navbell > div.menu').appendChild(notis)
    }
    return notis
}

export function UpdateNotificationContainer() {
    const container = document.querySelector('#navigationbar > ul > li.navHeader_dropmenu.navbell > div.menu')
    if (NotiCount.value <= 0) {
        if (container.firstElementChild.tagName !== 'P') {
            container.firstElementChild.remove()
        }
        const noNotis = document.createElement("p")
        noNotis.innerText = 'No Notifications'
        container.insertBefore(noNotis, container.firstChild)
    } else {
        if (container.firstElementChild.tagName === 'P') {
            container.firstElementChild.remove()
        }
    }
}