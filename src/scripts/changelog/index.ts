
import { DataStorage, _VERSION } from '../globals'
import { Popup, Notification, dialogs } from '../../modules/wrd-lib'
//@ts-ignore
import changes from './changelog.html'
import { DeveloperSettings } from '../settings'

export function showChangelog() {
    const Changelog = new Popup('???', `Changelog`, false)

    Changelog.setHtml(changes.replace('_VERSION', _VERSION))
    Changelog.onclose = () => {
        dialogs.notification({description: 'WRD+ developed by SoundInfinity', timeout: 5000})
        DataStorage.setKey('changelogDismissed', _VERSION)
    }

    Changelog.show()
}

if (DataStorage.getKey('changelogDismissed') !== _VERSION) showChangelog()
if (DeveloperSettings) DeveloperSettings.addButton('Show Changelog', ()=>showChangelog())