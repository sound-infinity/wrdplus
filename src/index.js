// Loader
require('./scripts/theme-loader')

// Modules
import { searchThreadSync } from './modules/wrd-lib'
import { LastestThreads as LT } from './scripts/globals'

LT.Migrate(searchThreadSync())
if (!document.body.innerText.match('Checking your browser')){
    require('./scripts/click-handler')
    require('./scripts/link-handler')
}
