import { DataStorage, _VERSION } from '../globals'
import { Popup, Notification } from '../../modules/wrd-lib'
//@ts-ignore
import changes from './changelog.html'
import { OtherSettings } from '../settings'
export function showChangelog() {
    const Changelog = new Popup('???', `Changelog`, false)
    Changelog.setHtml(changes.replace('_VERSION', _VERSION))
    Changelog.onclose = function() {
        new Notification('WRD+ developed by SoundInfinity', undefined, 5000)
        DataStorage.setKey('changelogDismissed', _VERSION)
    }
    Changelog.show()
}

if (DataStorage.getKey('changelogDismissed') !== _VERSION) showChangelog()
if (OtherSettings.getCheckboxValue('devmode')) OtherSettings.addButton('Show Changelog', ()=>showChangelog())