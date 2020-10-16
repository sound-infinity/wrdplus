import { ButtonData, Popup } from "./popup.class"

interface DialogMessageData {
    title: string,
    description: string|string[],
}

interface DialogYesNoData extends DialogMessageData {
    onresponse?: (accepted: boolean) => void
}

class DialogPresets {
    private readonly defaultTitle: string
    constructor(default_title: string) {
        this.defaultTitle = default_title
    }

    private make_popup(data: DialogMessageData) {
        const popup = new Popup()
        popup.title = data.title || this.defaultTitle
        popup.description = data.description
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

    showinfo(data: DialogMessageData) {
        const popup = this.make_popup(data)
        
        popup.buttons = {
            Ok: new ButtonData(() => {
                popup.remove()
            })
        }

        popup.show()
    }
}


export const dialogs: DialogPresets =  new DialogPresets("WRD+")