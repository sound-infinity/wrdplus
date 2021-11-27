export enum MenuType {
    Notifications = 0,
    AccountOptions
}

export function get_dropdown(menuType: MenuType): HTMLLIElement {
    for (const ddm of Object.values(document.querySelectorAll<HTMLLIElement>("li.navHeader_dropmenu"))) {
        const title = ddm.querySelector('.dropmenu-title')
        if (title) {
            const title_txt = title.getAttribute('title').toLowerCase()
            let menu_type: MenuType;

            switch(title_txt) {
                case 'account options':
                    menu_type = MenuType.AccountOptions
                    break;
                case 'notifications':
                    menu_type = MenuType.Notifications
                    break;
                default:
                    break;                
            }

            if (menu_type === menuType) return ddm;
        }   
    }

    return null
}