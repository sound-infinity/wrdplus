import DataManager from '../../modules/data-manager'
import { Settings } from '../../modules/wrd-lib'

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
OtherSettings.addSaveButton(SettingsData)
OtherSettings.setValues(SettingsData.getKey('OtherSettings') || {})

// KeyBind
addEventListener('keydown', e => {
    if (e.altKey && e.key === 's') SettingsPanel.toggle()
})