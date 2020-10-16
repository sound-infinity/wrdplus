import { MenuType, get_dropdown } from './utils'

class Notifications {
    containers: {[name: string]: HTMLElement} = {}
    
    constructor () {
        this.containers.main = get_dropdown(MenuType.Notifications)
        this.containers.messages = this.containers.main.querySelector('div.menu > .notifications')
    }

    get hasMessages () {
        return this.containers.messages != null
    }
}

let oncomplete = () => {
    var notis = new Notifications()
}

if(document.readyState === 'complete') oncomplete()
else {
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') oncomplete()
    })
}