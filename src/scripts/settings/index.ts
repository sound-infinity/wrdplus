import { DataManagers } from '../../modules/data-manager'
import { Popup, SettingsSection } from '../../modules/wrd-lib'
import { dialogs } from '../../modules/wrd-lib/dialogs';
import { settings, settingsData } from './globals'

// Theme Settings
export const ThemeSettings = settings.addSection('Theme Settings')
ThemeSettings.addTextbox({
    title: 'Theme Url',
    fillX: true,
    id: 'themeUrl',
    placeholder: 'https://example.com/mytheme.css'
})

ThemeSettings.addTextbox({
    title: 'Background Image Url',
    fillX: true,
    id: 'backgroundUrl',
    placeholder: 'https://example.com/myimage.jpeg'
})

ThemeSettings.addCheckbox({
    title: 'Apply semi-fixes (to background image)',
    id: 'applyFixBg'
})

ThemeSettings.addSaveButton({dataManager: settingsData})
ThemeSettings.setValues(settingsData.getKey('ThemeSettings') || {})



// Other Settings
export const OtherSettings = settings.addSection('Other Settings')
OtherSettings.addCheckbox({
    title: 'Developer Mode',
    id: 'devmode'
})

OtherSettings.addButton('List Storage(s)', () => {
    const Listing = new Popup()
    for(let DM of DataManagers) {
        Listing.addLabel(`${DM.Name} = ${DM.Size}kb`)
        Listing.addButton('Clear', () => {
           Listing.hide()
           dialogs.askyesno({
               title: 'DataManager',
               description: [`Are you sure you want to delete <strong>${DM.Name}</strong> and all of its contents?`],
               onresponse: (accepted) => {
                   if (accepted) {
                       DM.delete()
                       location.reload()
                   } else {
                       Listing.show()
                   }
               }
           })
        })
        Listing.addLineBreak()
    }
    //Listing.description = Sizes.concat('\n')
    Listing.show()
})
OtherSettings.addLineBreak()
OtherSettings.addSaveButton({dataManager: settingsData})
OtherSettings.setValues(settingsData.getKey('OtherSettings') || {})

// KeyBind
addEventListener('keydown', e => {
    if (e.altKey && e.key === 's') settings.toggle()
})

export let DeveloperSettings: SettingsSection

if (OtherSettings.get("devmode")) {
    DeveloperSettings = settings.addSection('Developer Settings')
}