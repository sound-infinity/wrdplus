// Loader
require('./scripts/patches')
require('./scripts/theme-loader')

// Modules
import { searchThreadSync, Popup } from './modules/wrd-lib'
import { LastestThreads as LT } from './scripts/globals'

LT.Migrate(searchThreadSync())
if (!document.body.innerText.match('Checking your browser')){
    require('./scripts/key-binds')
    require('./scripts/click-handler')
    require('./scripts/link-handler')
    require('./scripts/changelog')
}

require('./scripts/addons')