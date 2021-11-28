import { SettingsForm, SiteNotification } from "../modules/wearedevs-lib"

const form = new SettingsForm()
const section = form.addSection()

section.addHeading("GENERAL")
section.addTextbox("Hello World!")
section.addButton("Hello World!s")

document.addEventListener("keydown", (key) => {
    if (key.altKey && key.key.toUpperCase() == "S") {
        if (form.contents != null) {
            if (form.contents.parentNode == document.body) {
                document.head.appendChild(form.contents)
            } else {
                form.render()
            }
        }
    }
})

const notif = new SiteNotification()
notif.message = 'You can press "ALT+S" to config the script.'
notif.render()

setTimeout(() => {
    notif.dismiss()
}, 1500)
