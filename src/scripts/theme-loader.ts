import { dialogs } from '../modules/wrd-lib'
import { ThemeSettings } from './settings'

function getExtension(pathname: string): string {
    return pathname.split('.').reverse()[0]
}

async function applyTheme(themeUrl: string) {
    try {
        /*
        const url = new URL(theme_url)
        if (url == null || getExtension(url.pathname) !== 'css') {
            return
        }
        */

        const themeCode = await (await fetch(themeUrl)).text()
        const stylesheet = document.createElement('style')
        stylesheet.innerHTML = themeCode
        document.head.appendChild(stylesheet)
    } catch (x) {
        dialogs.showinfo({
            title: "Theme Settings",
            description: ['Failed to apply your theme.', `<a href='${themeUrl}'>Link Of Theme</a>`],
        })
    }
}

function applyBackground(background_url: string, applyFixes: boolean) {
    document.body.style.backgroundImage = `url("${background_url}")`
    if (!applyFixes) return
    document.body.style.backgroundRepeat = 'round'
    document.body.style.backgroundSize = 'contain'
}

function applySettings(){
    const backgroundUrl = ThemeSettings.get<string>('backgroundUrl')
    const applyFixBg = ThemeSettings.get<boolean>('applyFixBg')
    const themeUrl = ThemeSettings.get<string>('themeUrl')

    if (typeof backgroundUrl === 'string' && backgroundUrl.length > 3) {
        applyBackground(backgroundUrl, applyFixBg)
    }

    if (themeUrl.includes('://')) {
        applyTheme(themeUrl)
    }
}

if(document.readyState === 'interactive'){
    applySettings()
} else {
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive') applySettings()
    })
}
