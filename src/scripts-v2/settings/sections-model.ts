import { SectionInputType } from "../../modules/wearedevs-lib"
import { IOptionData } from "./IOptionData"

export const Sections: Record<string, Record<string, IOptionData>> = {
    wrdplus_features: {
        better_notifications: {
            id: "better_notifications",
            title: "Better Notifications",
            inputType: SectionInputType.Checkbox,
        },
        thread_highlights: {
            id: "thread_highlights",
            title: "Better Thread Titles",
            inputType: SectionInputType.Checkbox,
        },
        advanced_settings: {
            id: "advanced_settings",
            title: "Advanced Settings",
            inputType: SectionInputType.Checkbox,
        },
    },
    wrdplus_theme_mods: {
        custom_background: {
            id: "custom_background",
            title: "Custom Background",
            inputType: SectionInputType.TextField,
        },
        // custom_background_fixes: {
        //     id: "custom_background_fixes",
        //     title: "Fix Custom Background",
        //     inputType: SectionInputType.Checkbox,
        // },
        wearedevs_logo_asImage: {
            id: "wearedevs_logo_asImage",
            title: 'Replace "WeAreDevs" logo with Icon',
            inputType: SectionInputType.Checkbox,
        },
    },
    wrdplus_advanced_settings: {
        disable_notification_settingsKeyBind: {
            id: "disable_notification_settingsKeyBind",
            title: "Disable Notification For Settings Keybind",
            inputType: SectionInputType.Checkbox,
        },
    },
}
