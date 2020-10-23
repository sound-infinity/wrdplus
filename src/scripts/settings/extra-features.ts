import { settings as settings_main, settingsData as settings_data } from './globals'

export const settings = settings_main.addSection('Extra Features')

settings.addCheckbox({
    title: "Jump To Mention From Notifications",
    id: "notification_redirection"
})

settings.addCheckbox({
    checked: true,
    title: "Thread Markings",
    id: "threadmarkings",
})

settings.addCheckbox({
    checked: true,
    title: "Thread Highlighting",
    id: "threadhighlights"
})

settings.addSaveButton({dataManager:settings_data})
settings.load_data()