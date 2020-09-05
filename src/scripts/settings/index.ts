import DataManager, { DataManagers } from '../../modules/data-manager'
import { Settings, Popup, Notification } from '../../modules/wrd-lib'
import { ButtonData } from '../../modules/wrd-lib/dialogs';

const SettingsData = new DataManager('wrdplus-settings')
const SettingsPanel = new Settings.Form();

// Theme Settings
export const ThemeSettings = SettingsPanel.addSection('Theme Settings')
ThemeSettings.addTextbox('themeUrl', 'CSS URL')
ThemeSettings.addTextbox('backgroundUrl', 'Background Image URL')
ThemeSettings.addCheckbox('applyFixBg', 'Apply semi-fixes (for background image)')
ThemeSettings.addSaveButton(SettingsData)
ThemeSettings.setValues(SettingsData.getKey('ThemeSettings') || {})

// Other Settings
export const OtherSettings = SettingsPanel.addSection('Other Settings')
OtherSettings.addCheckbox('devmode', 'Developer Mode')

OtherSettings.addButton('List Storage(s)', () => {
    const Listing = new Popup()
    for(let DM of DataManagers) {
        Listing.addLabel(`${DM.Name} = ${DM.Size}kb`)
        Listing.addButton('Clear', () => {
            const response = new Popup()
            response.title = 'DataManager'
            response.description = [`Are you sure you want to delete <strong>${DM.Name}</strong> and all its contents?`]
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
OtherSettings.addSaveButton(SettingsData)
OtherSettings.setValues(SettingsData.getKey('OtherSettings') || {})

// KeyBind
addEventListener('keydown', e => {
    if (e.altKey && e.key === 's') SettingsPanel.toggle()
})