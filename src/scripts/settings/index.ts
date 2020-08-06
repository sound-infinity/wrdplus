import DataManager from '../../modules/data-manager'
import { Settings } from '../../modules/wrd-lib'

const SettingsData = new DataManager('wrdplus-settings')
const SettingsPanel = new Settings.Form();

// Theme Settings
export const ThemeSettings = SettingsPanel.addSection('Theme Settings')
let preValue: string

ThemeSettings.addTextbox('themeUrl', 'CSS URL')
ThemeSettings.addSaveButton(SettingsData).onclick = ()=>location.reload();
const ValidUrl = ThemeSettings.addLabel('[-]')
ThemeSettings.setValues(SettingsData.getKey('ThemeSettings') || {})

// Other Settings
export const OtherSettings = SettingsPanel.addSection('Other Settings')
OtherSettings.addCheckbox('devmode', 'Developer Mode')
OtherSettings.addSaveButton(SettingsData)
OtherSettings.setValues(SettingsData.getKey('OtherSettings') || {})

// Url Checks
function changeLabel(txt: string, color: string){
    ValidUrl.innerText = txt
    ValidUrl.style.color = color
}

setInterval(()=>{
    if(ThemeSettings.getTextboxValue('themeUrl') !== preValue) {
        try {
            new URL(ThemeSettings.getTextboxValue('themeUrl'))
            changeLabel('Valid', 'lightgreen')
        } catch (x) {
            changeLabel('Invalid', 'red')
        } finally {
            preValue = ThemeSettings.getTextboxValue('themeUrl')
        }
    }
}, 1000)

// KeyBind
addEventListener('keydown', e => {
    if (e.altKey && e.key === 's') SettingsPanel.toggle()
})