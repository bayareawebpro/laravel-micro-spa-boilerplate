"use strict";
import VueRoute from "../Services/Router/VueRoute"
import AbstractController from "./AbstractController"
export default class Menus extends AbstractController {
    constructor(App) {
        super(App)
    }

    get schema(){
        return {
            dropdown: {
                active: false
            },
            sidebar: {
                active: false,
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
                    }
                ],
            },
            kitchensink: {
                active: false
            },
        }
    }
}



