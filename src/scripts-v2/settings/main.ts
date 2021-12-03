import { indexInstancesValues, loadInstancesFromSaved, loadSectionInstances } from "./utils"
import { InstanceList } from "./InstanceList"
import { InstanceListOfValues } from "./InstanceListOfValues"
import { IOnSectionLoad } from "./IOnSectionLoad"
import { loadItem, removeItem, setItem, size, storages } from "../storage"
import { Sections } from "./sections"
import { SettingsForm, SettingsSection, SiteNotification, SitePopup, SitePopupPreset, SitePopupWithPreset, SitePopupYesNoResponse } from "../../modules/wearedevs-lib"
import "../storage"

let isSaving = false

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

function new_details(instances: InstanceList, section: SettingsSection, sectionId: string) {
    const values = indexInstancesValues(instances)
    return {
        detail: {
            sectionId: sectionId,
            section: section,
            values: values,
        },
    }
}

function loadSection(sectionName: string, sectionId: string, onload?: (valuesOfInstances: InstanceListOfValues, section: SettingsSection) => void): void {
    const section = form.addSection()
    section.addHeading(sectionName)
    const instances = loadSectionInstances(section, Sections[sectionId])

    const OnSavedEvent = new CustomEvent<IOnSectionLoad>("sectionsaved", new_details(instances, section, sectionId))
    section.addSubmitButton("Save", () => {
        save(sectionId, indexInstancesValues(instances))
        document.dispatchEvent(OnSavedEvent)
    })
    loadInstancesFromSaved(sectionId, instances).then(() => {
        const values = indexInstancesValues(instances)

        if (onload != null) onload(values, section)

        const OnSectionLoadEvent = new CustomEvent<IOnSectionLoad>("sectionload", new_details(instances, section, sectionId))
        document.dispatchEvent(OnSectionLoadEvent)
    })
}

function display_working_popup() {
    const popup = new SitePopup()
    popup.title = "Storage"
    popup.message = "working..."
    popup.contents?.querySelector(".close-btn")?.remove()
    popup.render()

    return popup
}

function AdvancedSection(section: SettingsSection) {
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
        display_working_popup()
        location.reload()
    }
}

document.addEventListener("sectionsaved", () => {
    if (changedSettings === false) {
        changedSettings = true
        const popup = new SitePopupWithPreset(SitePopupPreset.Okay)
        popup.title = "Settings"
        popup.message = "Your window will be refreshed after closing the settings menu!"
        popup.render()
    }
})

form.onclosed = () => onClose()

document.addEventListener("keydown", (key) => {
    // updateUI()
    if (key.altKey && key.key.toUpperCase() == "S") {
        if (form.contents != null && form.contents.parentNode == document.body) {
            document.head.appendChild(form.contents)
            onClose()
        } else {
            form.render()
        }
    }
})

function disable_notification(detail: IOnSectionLoad, notification: SiteNotification) {
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
            notif.message = 'You can press "ALT+S" to config the script.\n(click here to never show again)'
            if (notif.contents != null) {
                notif.contents.style.cursor = "pointer"
                notif.contents.onclick = () => disable_notification(detail, notif)
            }

            setTimeout(() => notif.dismiss(), 10 * 1000)
            notif.render()
        }
    }
})

// loadSection("Features", "wrdplus_features")
loadSection("Features", "wrdplus_features", (values) => {
    if (values["advanced_settings"] === true) {
        loadSection("Advanced Settings", "wrdplus_advanced_settings", (_, section) => {
            section.addLineBreak()
            AdvancedSection(section)
        })
    }
})
