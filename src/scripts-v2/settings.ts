import {
    SectionInputType,
    SettingsForm,
    SettingsSection,
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

interface IOptionData {
    id: string
    title: string
    inputType: SectionInputType
}

interface IInstanceData {
    element: HTMLInputElement
    optionData: IOptionData
}

function save(name: string, data: { [key: string]: string | boolean | null }) {
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

function loadInstancesFromSaved(
    storage: string,
    instances: { [id: string]: IInstanceData }
) {
    loadItem(storage).then((res) => {
        for (const id in res) {
            const instance = instances[id]
            switch (instance.optionData.inputType) {
                case SectionInputType.Checkbox:
                    instance.element.checked = res[id]
                    break
                case SectionInputType.TextField:
                    instance.element.value = res[id]
                    break
            }
        }
    })
}

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

declare type InstanceList = { [id: string]: IInstanceData }
declare type OptionList = { [id: string]: IOptionData }
declare type SectionList = { [section: string]: OptionList }

function loadSectionInstances(section: SettingsSection, options: OptionList) {
    const instances: { [id: string]: IInstanceData } = {}

    for (const option of Object.values(options)) {
        switch (option.inputType) {
            case SectionInputType.Checkbox:
                {
                    const element = section.addCheckbox(option.title, option.id)
                    instances[option.id] = {
                        element: element,
                        optionData: option,
                    }
                }
                break
            case SectionInputType.TextField:
                {
                    const element = section.addTextbox(option.title, option.id)
                    instances[option.id] = {
                        element: element,
                        optionData: option,
                    }
                }
                break
        }
    }
    return instances
}

function indexInstancesValues(instances: InstanceList) {
    const data: { [key: string]: string | boolean | null } = {}
    for (const instance of Object.values(instances)) {
        switch (instance.optionData.inputType) {
            case SectionInputType.Checkbox:
                {
                    const element = instance.element
                    const id = instance.optionData.id
                    if (typeof id === "string") data[id] = element.checked
                }
                break
            case SectionInputType.TextField:
                {
                    const element = instance.element
                    const id = instance.optionData.id
                    if (typeof id === "string") data[id] = element.value
                }
                break
        }
    }
    return data
}

const Sections: SectionList = {
    wrdplus_features: {
        better_notifications: {
            id: "better_notifications",
            title: "Better Notifications",
            inputType: SectionInputType.Checkbox,
        },
        thread_highlights: {
            id: "thread_highlights",
            title: "Better Thread Titles",
            inputType: SectionInputType.Checkbox,
        },
    },
}

function loadSection(sectionName: string, sectionId: string) {
    const section = form.addSection()
    section.addHeading(sectionName)
    const instances = loadSectionInstances(section, Sections[sectionId])
    section.addSubmitButton("Save", () =>
        save(sectionId, indexInstancesValues(instances))
    )
    loadInstancesFromSaved(sectionId, instances)
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
loadSection("Features", "wrdplus_features")
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
