import { Popup } from '../modules/wrd-lib'
import { ThemeSettings } from './settings'

const themeUrl = ThemeSettings.getTextboxValue('themeUrl')

function getExtension(pathname: string): string {
    return pathname.split('.').reverse()[0]
}

function isThemeUrlValid(url: string): boolean {
    try {
        const uri: URL = new URL(url)
        if (uri != null) {
            if (getExtension(uri.pathname) === 'css') {
                return true
            }
        }
    } catch (x) {}
    return false
}

if (isThemeUrlValid(themeUrl)) {
    fetch(themeUrl)
    .then(res => res.text())
    .then(src => {
      const style = document.createElement('style')
      style.innerHTML = src
      const append = function() {
        if (document.readyState === 'complete') {
            document.head.appendChild(style)
        }
      }
      append();
      document.addEventListener('readystatechange', append)
    })
    .catch(err => (new Popup([
        'Failed to get theme\'s source.',
        '',
        `<a href='${themeUrl}' class='round theme2 btn'>Theme Link<a>`], 
        'Theme Settings')).show())
}
const bgUrl = ThemeSettings.getTextboxValue('backgroundUrl')
const appBgFix = ThemeSettings.getCheckboxValue('applyFixBg')

if(bgUrl) {
    const exe = function () {
        document.body.style.backgroundImage = `url(${ bgUrl })`
        if (appBgFix) {
            document.body.style.backgroundRepeat = 'round'
            document.body.style.backgroundSize = 'contain'
        }
    }

    exe();
    document.addEventListener('readystatechange', exe)
}