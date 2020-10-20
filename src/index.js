// Loader
require('./scripts/theme-loader')
require('./scripts/patches')

// Modules
import { searchThreadSync } from './modules/wrd-lib'
import { LastestThreads as LT } from './scripts/globals'

let oncomplete = () => {
    if (!document.body.innerText.match('Checking your browser')){
        require('./scripts/key-binds')
        require('./scripts/click-handler')
        LT.Migrate(searchThreadSync())
        require('./scripts/link-handler')
        require('./scripts/changelog')
        require('./scripts/addons')
    }

}

if (document.readyState === 'complete') oncomplete()
else {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') oncomplete()
    }
}
