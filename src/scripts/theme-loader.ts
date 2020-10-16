import { Popup } from '../modules/wrd-lib'
import { ThemeSettings } from './settings'

function getExtension(pathname: string): string {
    return pathname.split('.').reverse()[0]
}

async function applyTheme(theme_url: string) {
    try {
        const url = new URL(theme_url)
        if (url == null || getExtension(url.pathname) !== 'css') {
            return
        }

        const theme_src: string = await (await fetch(theme_url)).text()
        const stylesheet: HTMLStyleElement = document.createElement('style')
        stylesheet.innerHTML = theme_src
        //const appendSource = () => document.readyState === 'complete' && 
        //appendSource()
        document.head.appendChild(stylesheet)

    } catch (x) {
        new Popup(`Failed to apply your theme. <a href='${theme_url}' class='round theme2 btn'>Theme's Link</a>`, 'Theme Settings', true)
    }
}

function applyBackground(background_url: string, applyFixes: boolean) {
    document.body.style.backgroundImage = `url("${background_url}")`
    if (!applyFixes) return
    document.body.style.backgroundRepeat = 'round'
    document.body.style.backgroundSize = 'contain'
}

function applySettings(){
    applyBackground(ThemeSettings.getTextboxValue('backgroundUrl'), ThemeSettings.getCheckboxValue('applyFixBg'))

    if (ThemeSettings.getTextboxValue('themeUrl').includes("://")) {
        applyTheme(ThemeSettings.getTextboxValue('themeUrl'))
    }
}

if(document.readyState === 'interactive'){
    applySettings()
} else {
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive') applySettings()
    })
}
