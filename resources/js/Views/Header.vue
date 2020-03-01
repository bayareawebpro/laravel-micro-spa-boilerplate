<script>
    /** @method logout */
    /** @property dropdown */
    export default {
        name: "VueRoot",
        beforeCreate() {
            this.$bind.mapGetters('Config', {
                environment: 'environment',
            })
            this.$bind.mapGetters('Menus', {
                dropdown: 'dropdown',
                sidebar: 'sidebar',
            })
            this.$bind.mapActions('Auth', {
                logout: 'logout',
            })
            this.$bind.mapGetters('Auth', {
                name: 'entity.name',
                loggedIn: 'entity.id',
            })
            this.$bind.mapState('Auth', {
                $request: '$request',
                $errors: '$errors',
            })
        }
    }
</script>
<template>
    <header id="header">
        <button v-if="loggedIn"
                role="button"
                aria-label="Sidebar Menu"
                id="pushMenuAction"
                class="text-blue-600 hover:text-blue-200"
                @click.prevent="sidebar.active = !sidebar.active">
            <i class="fa fa-bars"/>
        </button>
        <a id="brand" href="/">
            <span>Laravel</span><span>Micro</span>
        </a>
        <ul class="flex flex-grow justify-end pr-4">
            <li class="block relative self-center">
                <button
                    aria-label="Account Menu"
                    @click.prevent="dropdown.active = !dropdown.active"
                    class="btn btn-gray border-r-4 btn-sm rounded-full">
                    <i class="fa fa-user-circle mx-auto self-center w-2"></i>
                    <span class="hidden md:inline text-xs ml-1 self-center">Account</span>
                </button>
                <v-drop-down v-model="dropdown.active">
                    <template v-slot:default>
                        <template v-if="name">
                            <router-link
                                :to="{ name: 'auth.account' }" exact
                                class="btn btn-blue btn-block btn-xs">
                                <i class="fa fa-user w-2 mr-2"/>&nbsp;Edit Account
                            </router-link>
                            <v-action
                                @click="logout"
                                class="btn btn-blue btn-block btn-xs mt-2 text-left">
                                <i class="fa fa-lock w-2 mr-2"/>&nbsp;Logout
                            </v-action>
                        </template>
                        <template v-else>
                            <router-link
                                :to="{ name: 'auth.login' }"
                                class="btn btn-blue btn-block btn-xs">
                                <i class="fa fa-unlock w-3 mr-1"/>&nbsp;Login
                            </router-link>
                            <router-link
                                :to="{ name: 'auth.register' }"
                                class="btn btn-blue btn-block btn-xs mt-2">
                                <i class="fa fa-user-plus w-3 mr-1"/>&nbsp;Register
                            </router-link>
                            <router-link
                                :to="{ name: 'auth.forgot' }"
                                class="btn btn-blue btn-block btn-xs mt-2">
                                <i class="fa fa-key w-3 mr-1"/>&nbsp;Forgot Password
                            </router-link>
                        </template>
                    </template>
                </v-drop-down>
            </li>
        </ul>
    </header>
</template>
