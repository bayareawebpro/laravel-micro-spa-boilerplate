"use strict";
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
                active: false,
                items:[
                    {
                        name: 'Users',
                        roles: ['admin'],
                        active: false,
                        items:[
                            {
                                name: 'Browse', icon: 'fa-users',
                                to: this.$link('users.index'),
                            },
                            {
                                name: 'Create', icon: 'fa-user-plus',
                                to: this.$link('users.create'),
                            }
                        ],
                    },
                    {
                        name: 'API TOKENS',
                        roles: ['admin', 'user'],
                        active: false,
                        items:[
                            {
                                name: 'Browse', icon: 'fa-unlock',
                                to: this.$link('tokens.index'),
                            },
                            {
                                name: 'Create', icon: 'fa-key',
                                to: this.$link('tokens.create'),
                            }
                        ],
                    },
                    {
                        name: 'Framework',
                        roles: ['admin', 'user'],
                        active: false,
                        items:[
                            {
                                name: 'Permissions', icon: 'fa-cubes',
                                to: this.$link('framework.permissions'),
                            },
                            {
                                name: 'Bindings', icon: 'fa-cubes',
                                to: this.$link('framework.bindings'),
                            },
                            {
                                name: 'Providers', icon: 'fa-cubes',
                                to: this.$link('framework.providers'),
                            },
                            {
                                name: 'Sharing', icon: 'fa-share',
                                to: this.$link('framework.sharing'),
                            },
                            {
                                name: 'Logs', icon: 'fa-server',
                                to: this.$link('framework.logs'),
                            },
                        ],
                    },
                    {
                        name: 'KITCHEN SINK',
                        roles: ['admin', 'user'],
                        active: false,
                        items:[
                            {
                                name: 'Tabs', icon: 'fa-window-restore',
                                to: this.$link('kitchensink.tabs'),
                            },
                            {
                                name: 'Badges', icon: 'fa-certificate',
                                to: this.$link('kitchensink.badges'),
                            },
                            {
                                name: 'Cards', icon: 'fa-address-card',
                                to: this.$link('kitchensink.cards'),
                            },
                            {
                                name: 'Actions', icon: 'fa-address-card',
                                to: this.$link('kitchensink.actions'),
                            },
                            {
                                name: 'Collapse', icon: 'fa-plus',
                                to: this.$link('kitchensink.collapse'),
                            },
                            {
                                name: 'Typography', icon: 'fa-font',
                                to: this.$link('kitchensink.typography'),
                            },
                            {
                                name: 'Modals', icon: 'fa-window-maximize',
                                to: this.$link('kitchensink.modals'),
                            },
                            {
                                name: 'Charts', icon: 'fa-chart-bar',
                                to: this.$link('kitchensink.charts'),
                            },
                            {
                                name: 'Forms', icon: 'fa-keyboard',
                                to: this.$link('kitchensink.forms'),
                            },
                        ],
                    }
                ],
            },
        }
    }
}



