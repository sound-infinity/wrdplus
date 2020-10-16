//Styles
import SettingsThemes from './settings'
import ThreadMarks from './thread-marks'
import PopupThemes from './popup'
import TagThemes from './tags'
//Other
import Category from './category.class'
import booleans from '../website-booleans'
import wrdplusNotifs from './wrdplus-notifs'
import terminal from './terminal'

const StyleSheets: {[categoryName: string]: Category} = {}

export const DefaultCategories: {[themeName: string]: Category} = {
    General: CreateCategory('general'),
    Light: CreateCategory('lightmode'),
    Dark: CreateCategory('darkmode')
}

export function CreateCategory(categoryName: string) {
    if (!(categoryName in StyleSheets)) {
        const NewCategory = new Category(categoryName)
        StyleSheets[categoryName] = NewCategory

        if (arguments.length > 0) {
            const args = Object.values(arguments).slice(1)
            NewCategory.addStyle(...args) 
        }

        return NewCategory

    }
}

export function AutoAdd(themeObject: {[themeName: string]: string}) {
    for (const themeName in themeObject) {
        const CategoryName: string = themeName[0].toUpperCase() + themeName.substring(1).toLowerCase()
        const Category = DefaultCategories[CategoryName]
        if (Category)
            Category.addStyle(themeObject[themeName])
    }
}

export function defaultConfig() {
    AutoAdd(TagThemes)
    AutoAdd(PopupThemes)
    AutoAdd(SettingsThemes)
    AutoAdd(ThreadMarks)
    AutoAdd(wrdplusNotifs)
    AutoAdd(terminal)
    
    DefaultCategories.General.enable()

    let update = () => {
        if (booleans.darkTheme.isEnabled) {
            DefaultCategories.Light.enable()
            DefaultCategories.Dark.disable()
        } else {
            DefaultCategories.Light.disable()
            DefaultCategories.Dark.enable()
        }
    }

    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') update()            
    })

    update()
    if (booleans.darkTheme.inputElement) {
        booleans.darkTheme.oninput = update
    }
    return StyleSheets
}

defaultConfig()