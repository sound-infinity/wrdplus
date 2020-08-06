//Styles
import SettingsThemes from './settings'
import ThreadMarks from './thread-marks'
import PopupThemes from './popup'
import TagThemes from './tags'
//Other
import Category from './category.class'
import booleans from '../website-booleans'

const StyleSheets = {} // Category[]

export const DefaultCategories = {
    General: CreateCategory('general'),
    Light: CreateCategory('lightmode'),
    Dark: CreateCategory('darkmode')
}

export function CreateCategory(categoryName) {
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

export function AutoAdd(themeObject) {
    for (const themeName in themeObject) {
        const CategoryName = themeName[0].toUpperCase() + themeName.substring(1).toLowerCase()
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

    update()
    if (booleans.darkTheme.inputElement)
        booleans.darkTheme.oninput = update
    return StyleSheets
}

defaultConfig()