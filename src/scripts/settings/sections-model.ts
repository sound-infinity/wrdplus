import { SectionInputType } from "../../modules/wearedevs-lib"
import { IOptionData } from "./@types/IOptionData"

export const Sections: Record<string, Record<string, IOptionData>> = {
    wrdplus_features: {
        // better_notifications: {
        //     id: "better_notifications",
        //     title: "Better Notifications",
        //     inputType: SectionInputType.Checkbox,
        //     defaultValue: true,
        // },
        better_paginator: {
            id: "better_paginator",
            title: "Better Paginator",
            inputType: SectionInputType.Checkbox,
            defaultValue: true
        },
        thread_highlights: {
            id: "thread_highlights",
            title: "Better Thread Titles",
            description: "this displays tags in the title of threads, those inclosed in brackets: [example]",
            inputType: SectionInputType.Checkbox,
            defaultValue: true
        },
        better_mentions: {
            id: "better_mentions",
            title: "Better Mentions",
            description: "displays the username and text of the author in the reply page.",
            inputType: SectionInputType.Checkbox,
            defaultValue: true
        },
        profile_banners: {
            id: "enable_profile_banners",
            title: "Enable Profile Banners",
            description: 'the image used will be retrieved from "Account > Website"',
            inputType: SectionInputType.Checkbox,
            defaultValue: true
        },
        animations_fadeIn: {
            id: "animations_fadeIn",
            title: "WebPage Fading",
            inputType: SectionInputType.Checkbox
        },
        disable_signatures: {
            id: "disable_signatures",
            title: "Disable Signatures",
            inputType: SectionInputType.Checkbox
        },
        advanced_settings: {
            id: "advanced_settings",
            title: "Advanced Settings",
            inputType: SectionInputType.Checkbox
        }
    },
    wrdplus_theme_mods: {
        custom_background: {
            id: "custom_background",
            title: "Custom Background",
            inputType: SectionInputType.TextField
        },
        custom_background_size: {
            id: "custom_background_size",
            title: "Custom Background Size",
            description: "WidthXHeight, will be rendered in pixels",
            inputType: SectionInputType.TextField,
            defaultValue: "auto"
        },
        custom_background_asSVG: {
            id: "custom_background_asSVG",
            title: "Image Is A SVG",
            inputType: SectionInputType.Checkbox
        },
        custom_background_enabled: {
            id: "custom_background_enabled",
            title: "Enabled",
            inputType: SectionInputType.Checkbox
        },
        // custom_background_fixes: {
        //     id: "custom_background_fixes",
        //     title: "Fix Custom Background",
        //     inputType: SectionInputType.Checkbox,
        // },
        wearedevs_logo_asImage: {
            id: "wearedevs_logo_asImage",
            title: 'Replace "WeAreDevs" logo with Icon',
            inputType: SectionInputType.Checkbox
        }
    },
    wrdplus_advanced_settings: {
        disable_notification_settingsKeyBind: {
            id: "disable_notification_settingsKeyBind",
            title: "Disable Notification For Settings Keybind",
            inputType: SectionInputType.Checkbox
        }
    }
}
