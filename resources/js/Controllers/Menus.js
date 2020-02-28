"use strict";
import VueRoute from "../Services/Router/VueRoute"
import Controller from "../Services/Store/Controller"
export default class Menus extends Controller {
    constructor(App) {
        super(App)
    }

    get schema(){
        return {
            dropdown: {
                active: false
            },
            sidebar: {
                active: true,
                items:[
                    {
                        name: 'Users',
                        active: false,
                        items:[
                            {
                                name: 'Browse', icon: 'fa-users',
                                to: VueRoute.link('users.index'),
                            },
                            {
                                name: 'Create', icon: 'fa-user-plus',
                                to: VueRoute.link('users.create'),
                            }
                        ],
                    },
                    {
                        name: 'API TOKENS',
                        active: false,
                        items:[
                            {
                                name: 'Browse', icon: 'fa-unlock',
                                to: VueRoute.link('tokens.index'),
                            },
                            {
                                name: 'Create', icon: 'fa-key',
                                to: VueRoute.link('tokens.create'),
                            }
                        ],
                    },
                    {
                        name: 'Framework',
                        active: false,
                        items:[
                            {
                                name: 'Permissions', icon: 'fa-cubes',
                                to: VueRoute.link('framework.permissions'),
                            },
                            {
                                name: 'Bindings', icon: 'fa-cubes',
                                to: VueRoute.link('framework.bindings'),
                            },
                            {
                                name: 'Providers', icon: 'fa-cubes',
                                to: VueRoute.link('framework.providers'),
                            },
                            {
                                name: 'Sharing', icon: 'fa-share',
                                to: VueRoute.link('framework.sharing'),
                            },
                            {
                                name: 'Logs', icon: 'fa-server',
                                to: VueRoute.link('framework.logs'),
                            },
                        ],
                    },
                    {
                        name: 'KITCHEN SINK',
                        active: false,
                        items:[
                            {
                                name: 'Tabs', icon: 'fa-window-restore',
                                to: VueRoute.link('kitchensink.tabs'),
                            },
                            {
                                name: 'Badges', icon: 'fa-certificate',
                                to: VueRoute.link('kitchensink.badges'),
                            },
                            {
                                name: 'Cards', icon: 'fa-address-card',
                                to: VueRoute.link('kitchensink.cards'),
                            },
                            {
                                name: 'actions', icon: 'fa-address-card',
                                to: VueRoute.link('kitchensink.actions'),
                            },
                        ],
                    }
                ],
            },
            kitchensink: {
                active: false
            },
        }
    }
}



