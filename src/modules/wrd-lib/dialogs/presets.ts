import { Notification } from "./notification.class"
import { ButtonData, Popup } from "./popup.class"

interface DialogBasicData {
    title?: string,
    description: string|string[],
}

interface DialogYesNoData extends DialogBasicData {
    onresponse?: (accepted: boolean) => void
}

interface DialogNotificationData extends DialogBasicData {
    timeout?: number
}

interface DialogButtonData {
    name: string,
    onclick: (this: Popup) => void
}

interface DialogPopupData extends DialogBasicData {
    buttons?: DialogButtonData[]
}

class DialogPresets {
    private readonly defaultTitle: string
    constructor(default_title: string) {
        this.defaultTitle = default_title
    }

    private make_popup(data: DialogBasicData) {
        const popup = new Popup()
        popup.title = data.title || this.defaultTitle
        popup.description = data.description
        return popup
    }

    showpopup(data: DialogPopupData) {
        const popup = this.make_popup(data)
        if(data.buttons != null)
            for (const btn_data of data.buttons)
                popup.addButton(btn_data.name, btn_data.onclick)
        return popup
    }

    askyesno (data: DialogYesNoData) {
        const popup = this.make_popup(data)

        popup.buttons = {
            Yes: new ButtonData(() => {
                popup.hide()
                if(data?.onresponse(true) == null) popup.remove(true)
            }),
            No: new ButtonData(() => {
                popup.hide()
                if(data?.onresponse(false) == null) popup.remove(true)
            })
        }

        popup.onclose = () => data?.onresponse(false)

        popup.show()
    }

    showinfo(data: DialogBasicData) {
        const popup = this.make_popup(data)
        
        popup.buttons = {
            Ok: new ButtonData(() => {
                popup.remove()
            })
        }

        popup.show()
    }

    notification(data: DialogNotificationData) {
        new Notification(typeof data.description === 'string' ? data.description : "", data.title || this.defaultTitle, data.timeout)
    }
}


export const dialogs: DialogPresets =  new DialogPresets("WRD+")