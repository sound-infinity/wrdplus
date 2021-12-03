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

async function loadInstancesFromSaved(
    storage: string,
    instances: { [id: string]: IInstanceData }
) {
    const res = await loadItem(storage)
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
    return res
}

declare type InstanceList = { [id: string]: IInstanceData }
declare type InstanceListOfValues = { [id: string]: string | boolean | null }
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
    const data: InstanceListOfValues = {}
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

/*
export const settings = settings_main.addSection('Theme Settings')

settings.addTextbox({
    title: 'Theme Url',
    fillX: true,
    id: 'themeUrl',
    placeholder: 'https://example.com/mytheme.css'
})

settings.addTextbox({
    title: 'Background Image Url',
    fillX: true,
    id: 'backgroundUrl',
    placeholder: 'https://example.com/myimage.jpeg'
})

settings.addCheckbox({
    title: 'Apply semi-fixes (to background image)',
    id: 'applyFixBg'
})

settings.addCheckbox({
    title: 'Replace "WeAreDevs" logo with Icon',
    id: 'replace_wrd_textlabel'
})
*/

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
        advanced_settings: {
            id: "advanced_settings",
            title: "Advanced Settings",
            inputType: SectionInputType.Checkbox,
        },
    },
    wrdplus_theme_mods: {
        custom_background: {
            id: "custom_background",
            title: "Custom Background",
            inputType: SectionInputType.TextField,
        },
        custom_background_fixes: {
            id: "custom_background_fixes",
            title: "Fix Custom Background",
            inputType: SectionInputType.Checkbox,
        },
        wearedevs_logo_asImage: {
            id: "wearedevs_logo_asImage",
            title: 'Replace "WeAreDevs" logo with Icon',
            inputType: SectionInputType.Checkbox,
        },
    },
    wrdplus_advanced_settings: {
        disable_notification_settingsKeyBind: {
            id: "disable_notification_settingsKeyBind",
            title: "Disable Notification For Settings Keybind",
            inputType: SectionInputType.Checkbox,
        },
    },
}

declare interface IOnSectionLoad {
    sectionId: string
    section: SettingsSection
    values: InstanceListOfValues
}

function new_details(
    instances: InstanceList,
    section: SettingsSection,
    sectionId: string
) {
    const values = indexInstancesValues(instances)
    return {
        detail: {
            sectionId: sectionId,
            section: section,
            values: values,
        },
    }
}

function loadSection(
    sectionName: string,
    sectionId: string,
    onload?: (
        valuesOfInstances: InstanceListOfValues,
        section: SettingsSection
    ) => void
): void {
    const section = form.addSection()
    section.addHeading(sectionName)
    const instances = loadSectionInstances(section, Sections[sectionId])

    const OnSavedEvent = new CustomEvent<IOnSectionLoad>(
        "sectionsaved",
        new_details(instances, section, sectionId)
    )
    section.addSubmitButton("Save", () => {
        save(sectionId, indexInstancesValues(instances))
        document.dispatchEvent(OnSavedEvent)
    })
    loadInstancesFromSaved(sectionId, instances).then(() => {
        const values = indexInstancesValues(instances)

        if (onload != null) onload(values, section)

        const OnSectionLoadEvent = new CustomEvent<IOnSectionLoad>(
            "sectionload",
            new_details(instances, section, sectionId)
        )
        document.dispatchEvent(OnSectionLoadEvent)
    })
}

function AdvancedSection(section: SettingsSection) {
    //const section = form.addSection()
    //section.addHeading("Advanced")
    section.addButton("List Storage(s)").addEventListener("click", () => {
        const Listing = new SitePopupWithPreset(SitePopupPreset.Okay)
        Listing.title = "Storage"

        function display_working_popup() {
            const popup = new SitePopup()
            popup.title = "Storage"
            popup.message = "working..."
            popup.contents?.querySelector(".close-btn")?.remove()
            popup.render()

            return popup
        }

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
                        display_working_popup()
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

        Listing.addButton("Clear All").onclick = () => {
            display_working_popup()
            for (const storageName of storages) removeItem(storageName)
            location.reload()
        }
        Listing.render()
    })
}

loadSection("Theme Settings", "wrdplus_theme_mods")

let changedSettings = false
function onClose() {
    if (changedSettings) {
        const popup2 = new SitePopup()
        popup2.title = "Settings"
        popup2.message = "working..."
        popup2.contents?.querySelector(".close-btn")?.remove()
        popup2.render()
        location.reload()
    }
}

document.addEventListener("sectionsaved", () => {
    if (changedSettings === false) {
        changedSettings = true
        const popup = new SitePopupWithPreset(SitePopupPreset.Okay)
        popup.title = "Settings"
        popup.message =
            "Your window will be refreshed after closing the settings menu!"
        popup.render()
    }
})

form.onclosed = () => onClose()

document.addEventListener("keydown", (key) => {
    // updateUI()
    if (key.altKey && key.key.toUpperCase() == "S") {
        if (form.contents != null) {
            if (form.contents.parentNode == document.body) {
                document.head.appendChild(form.contents)
                onClose()
            } else {
                form.render()
            }
        }
    }
})

function disable_notification(
    detail: IOnSectionLoad,
    notification: SiteNotification
) {
    detail.values["disable_notification_settingsKeyBind"] = true
    save(detail.sectionId, detail.values)
    notification.dismiss()
}

document.addEventListener("sectionload", (e: CustomEvent | Event) => {
    if (!("detail" in e)) return
    const detail = e.detail as IOnSectionLoad
    if (detail.sectionId === "wrdplus_advanced_settings") {
        if (detail.values["disable_notification_settingsKeyBind"] === false) {
            const notif = new SiteNotification()
            notif.message =
                'You can press "ALT+S" to config the script.\n(click here to never show again)'
            if (notif.contents != null) {
                notif.contents.style.cursor = "pointer"
                notif.contents.onclick = () =>
                    disable_notification(detail, notif)
            }

            setTimeout(() => notif.dismiss(), 10 * 1000)
            notif.render()
        }
    }
})

// loadSection("Features", "wrdplus_features")
loadSection("Features", "wrdplus_features", (values) => {
    if (values["advanced_settings"] === true) {
        loadSection(
            "Advanced Settings",
            "wrdplus_advanced_settings",
            (_, section) => {
                section.addLineBreak()
                AdvancedSection(section)
            }
        )
    }
})
