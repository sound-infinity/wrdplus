import { settings as settings_main, settingsData as settings_data } from './globals'

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

settings.addSaveButton({dataManager:settings_data})
settings.load_data()

if (settings.get<boolean>("replace_wrd_textlabel")) {
    document.addEventListener("readystatechange", () => {
        const logo = document.querySelector("#foologo")
        if (logo != null) {
            const icon = document.createElement("img")
            icon.setAttribute("style", "width:32px;height:32px;vertical-align:middle;margin:2px 0")
            icon.setAttribute("src", "/favicon.ico")
            logo.textContent = ""
            logo.appendChild(icon)
        }
    })
}