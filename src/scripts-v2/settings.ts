import {
    SectionInputType,
    SettingsForm,
    SiteNotification,
    SitePopupPreset,
    SitePopupWithPreset,
} from "../modules/wearedevs-lib"
import {
    SitePopup,
    SitePopupYesNoResponse,
} from "../modules/wearedevs-lib/dialogs"
import { DB_GENERAL_NAME } from "./constants"
import "./storage"
import { loadItem, removeItem, setItem, size, storages } from "./storage"

let isSaving = false

function save(name: string, data: object) {
    if (isSaving === true) {
        const popup = new SitePopupWithPreset(SitePopupPreset.Okay)
        popup.message = "Saving in progress. Try again later."
        popup.render()
    } else {
        isSaving = true
        loadItem(name).then(() => {
            setItem(name, data)
            isSaving = false
        })
    }
}

const form = new SettingsForm()

function GeneralSection() {
    const section = form.addSection()

    section.addHeading("General")

    function updateUI() {
        loadItem(DB_GENERAL_NAME).then((res) => {
            //check.checked = res[check.name]
        })
    }

    updateUI()

    section.addSubmitButton("Save", () =>
        save(DB_GENERAL_NAME, {
            //[check.name]: check.checked,
        })
    )
}

function FeaturesSection() {
    const section = form.addSection()
    section.addHeading("Features")
    const options: [string, string, SectionInputType][] = [
        [
            "better_notifications",
            "Better Notifications",
            SectionInputType.Checkbox,
        ],
        [
            "thread_highlights",
            "Better Thread Titles",
            SectionInputType.Checkbox,
        ],
    ]
    const instances: [HTMLInputElement, [string, string, SectionInputType]][] =
        []

    for (const data of options) {
        switch (data[2]) {
            case SectionInputType.Checkbox:
                const checkbox = section.addCheckbox(data[1], data[0])
                instances.push([checkbox, data])
                break
            case SectionInputType.TextField:
                const textfield = section.addTextbox(data[1], data[0])
                instances.push([textfield, data])
                break
        }
    }

    function getValues() {
        const data: { [key: string]: string | boolean | null } = {}
        for (const instance of instances) {
            switch (instance[1][2]) {
                case SectionInputType.Checkbox:
                    {
                        const element = instance[0]
                        const id = instance[1][1]
                        if (typeof id === "string") data[id] = element.checked
                    }
                    break
                case SectionInputType.TextField:
                    {
                        const element = instance[0]
                        const id = instance[1][1]
                        if (typeof id === "string")
                            data[id] = element.textContent
                    }
                    break
            }
        }
        return data
    }

    section.addSubmitButton("Save", () => save("wrdplus_features", getValues()))
}

function AdvancedSection() {
    const section = form.addSection()
    section.addHeading("Advanced")
    section.addButton("List Storage(s)").addEventListener("click", () => {
        const Listing = new SitePopupWithPreset(SitePopupPreset.Okay)
        Listing.title = "Storage"

        for (const storageName of storages) {
            const button = Listing.appendButton("Clear")
            button.style.fontSize = "small"
            button.addEventListener("click", () => {
                Listing.dismiss()
                const popup = new SitePopupWithPreset(SitePopupPreset.YesNo)
                popup.title = "Storage"
                popup.html = `Are you sure you want to delete <strong>${storageName}</strong> and all of its contents?`
                popup.onyesnoresponse = (res) => {
                    if (res === SitePopupYesNoResponse.Yes) {
                        const popup2 = new SitePopup()
                        popup2.title = "Storage"
                        popup2.message = "working..."
                        popup2.contents?.querySelector(".close-btn")?.remove()
                        popup2.render()
                        popup.remove()

                        removeItem(storageName)
                        location.reload()
                    } else {
                        popup.dismiss()
                        Listing.render()
                    }
                }
                popup.render()
            })
            Listing.appendLabel(`${storageName} = ${size(storageName)}kb`)
            Listing.appendBreak()
        }
        Listing.render()
    })
}

GeneralSection()
FeaturesSection()
AdvancedSection()

document.addEventListener("keydown", (key) => {
    // updateUI()
    if (key.altKey && key.key.toUpperCase() == "S") {
        if (form.contents != null) {
            if (form.contents.parentNode == document.body) {
                document.head.appendChild(form.contents)
            } else {
                form.render()
            }
        }
    }
})

const notif = new SiteNotification()
notif.message = 'You can press "ALT+S" to config the script.'
notif.render()

setTimeout(() => {
    notif.dismiss()
}, 1500)
