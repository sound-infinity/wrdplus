import { SettingsForm } from "../modules/wearedevs-lib"

const form = new SettingsForm()
const section = form.addSection()
section.addHeading("GENERAL")
form.render()
