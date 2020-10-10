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
        const appendSource = () => {
            if (document.readyState === 'complete')
                document.head.appendChild(stylesheet)
        }

        appendSource()
        document.addEventListener('readystatechange', appendSource)
    } catch (x) {
        new Popup(`Failed to apply your theme. <a href='${theme_url}' class='round theme2 btn'>Theme's Link</a>`, 'Theme Settings', true)
    }
}

if (ThemeSettings.getTextboxValue('themeUrl').includes("://")) {
    applyTheme(ThemeSettings.getTextboxValue('themeUrl'))
}

const backgroundUrl = ThemeSettings.getTextboxValue('backgroundUrl')
const apply_bg_fix = ThemeSettings.getCheckboxValue('applyFixBg')

if(backgroundUrl) {
    const setChanges = function () {
        document.body.style.backgroundImage = `url(${ backgroundUrl })`
        if (apply_bg_fix) {
            document.body.style.backgroundRepeat = 'round'
            document.body.style.backgroundSize = 'contain'
        }
    }

    setChanges()
    document.addEventListener('readystatechange', setChanges)
}