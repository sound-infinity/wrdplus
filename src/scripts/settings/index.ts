import DataManager, { DataManagers } from '../../modules/data-manager'
import { Settings, Popup, Notification, SettingsForm, SettingsSection } from '../../modules/wrd-lib'
import { ButtonData } from '../../modules/wrd-lib/dialogs';

const SettingsData = new DataManager('wrdplus-settings')
const SettingsPanel = new Settings.Form();

// Theme Settings
export const ThemeSettings = SettingsPanel.addSection('Theme Settings')
ThemeSettings.addTextboxWithData({
    title: 'Theme Url',
    fillX: true,
    id: 'themeUrl',
    placeholder: 'https://example.com/mytheme.css'
})

ThemeSettings.addTextboxWithData({
    title: 'Background Image Url',
    fillX: true,
    id: 'backgroundUrl',
    placeholder: 'https://example.com/myimage.jpeg'
})

ThemeSettings.addCheckboxWithData({
    title: 'Apply semi-fixes (to background image)',
    id: 'applyFixBg'
})

ThemeSettings.addSaveButtonWithData({dataManager: SettingsData})
ThemeSettings.setValues(SettingsData.getKey('ThemeSettings') || {})



// Other Settings
export const OtherSettings = SettingsPanel.addSection('Other Settings')
OtherSettings.addCheckboxWithData({
    title: 'Developer Mode',
    id: 'devmode'
})

OtherSettings.addButton('List Storage(s)', () => {
    const Listing = new Popup()
    for(let DM of DataManagers) {
        Listing.addLabel(`${DM.Name} = ${DM.Size}kb`)
        Listing.addButton('Clear', () => {
            const response = new Popup()
            response.title = 'DataManager'
            response.description = [`Are you sure you want to delete <strong>${DM.Name}</strong> and all of its contents?`]
            Listing.close()
            response.buttons = {
                Yes: new ButtonData((e: MouseEvent) => {
                    DM.delete()
                    location.reload()
                }),
                No: new ButtonData(function() {
                    this.close()
                })
            }
            response.onclose = () => {
                response.onclose = null
                Listing.show()
                response.remove()
            }
            response.show()
        })
        Listing.addLineBreak()
    }
    //Listing.description = Sizes.concat('\n')
    Listing.show()
})
OtherSettings.addLineBreak()
OtherSettings.addSaveButtonWithData({dataManager: SettingsData})
OtherSettings.setValues(SettingsData.getKey('OtherSettings') || {})

// KeyBind
addEventListener('keydown', e => {
    if (e.altKey && e.key === 's') SettingsPanel.toggle()
})

export let DeveloperSettings: SettingsSection

if (OtherSettings.getCheckboxValue("devmode")) {
    DeveloperSettings = SettingsPanel.addSection('Developer Settings')
}