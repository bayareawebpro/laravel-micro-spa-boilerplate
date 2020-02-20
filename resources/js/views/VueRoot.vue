<script>
    export default {
        name: "VueRoot",
        beforeCreate() {
            this.$bind.mapGetters('Menus', {
                dev: 'dev',
                left: 'left',
                right: 'right',
                users: 'users',
                tokens: 'tokens',
                kitchensink: 'kitchensink',
            })
            this.$bind.mapActions('Auth', {
                logout: 'logout',
            })
            this.$bind.mapGetters('Auth', {
                name: 'entity.name',
            })
            this.$bind.mapState('Auth', {
                $request: '$request',
                $errors: '$errors',
            })
        }
    }
</script>
<template>
    <div id="wrapper">
        <v-toasts/>
        <header id="header">
            <button v-if="name" @click.prevent="left.active = !left.active" class="px-2 mr-2">
                <i class="fa fa-bars text-blue-600 hover:text-blue-200"/>
            </button>
            <a id="brand" href="/">
                <span>LaravelMicro</span><span>.app</span>
            </a>
            <ul class="flex flex-grow justify-end">
                <li class="ml-2 relative">
                    <button
                        @click.prevent="right.active = !right.active"
                        class="btn btn-sm font-thin rounded-full bg-gray-600">
                        <i class="fa fa-user-circle"/>
                        <span class="hidden md:inline text-xs">
                            Account
                        </span>
                    </button>
                    <v-drop-down v-model="right.active">
                        <template v-slot:default>
                            <template v-if="name">
                                <router-link
                                    :to="{ name: 'auth.account' }" exact
                                    class="btn btn-block btn-xs btn-transparent">
                                    <i class="fa fa-user w-2 mr-2"/>&nbsp;Edit Account
                                </router-link>
                                <v-action
                                    @click="logout"
                                    class="btn btn-block btn-xs btn-transparent mt-2 text-left">
                                    <i class="fa fa-lock w-2 mr-2"/>&nbsp;Logout
                                </v-action>
                            </template>
                            <template v-else>
                                <router-link
                                    :to="{ name: 'auth.login' }"
                                    class="btn btn-block btn-xs btn-transparent">
                                    <i class="fa fa-unlock w-3 mr-1"/>&nbsp;Login
                                </router-link>
                                <router-link
                                    :to="{ name: 'auth.register' }"
                                    class="btn btn-block btn-xs btn-transparent mt-2">
                                    <i class="fa fa-user-plus w-3 mr-1"/>&nbsp;Register
                                </router-link>
                                <router-link
                                    :to="{ name: 'auth.forgot' }"
                                    class="btn btn-block btn-xs btn-transparent mt-2">
                                    <i class="fa fa-user-plus w-3 mr-1"/>&nbsp;Forgot Password
                                </router-link>
                            </template>
                        </template>
                    </v-drop-down>
                </li>
            </ul>
        </header>
        <section id="content">
            <transition tag="div" name="fadeInLeft" mode="out-in">
                <aside v-if="left.active" class="sidebar">
                    <div class="p-4">
                        <router-link class="sidebar-link" :to="{ name: 'dashboard' }" exact>
                            <i class="fa fa-unlock w-3 mr-1"/>&nbsp;Dashboard
                        </router-link>
                        <hr>

                        <v-collapse v-model="users.active">
                            <template v-slot:title>USERS</template>
                            <template v-slot:default>
                                <router-link class="sidebar-link" :to="{ name: 'users.index' }" exact>
                                    <i class="fa fa-users w-3 mr-1"/>&nbsp;Browse
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'users.create' }" exact>
                                    <i class="fa fa-user-plus w-3 mr-1"/>&nbsp;Create
                                </router-link>
                            </template>
                        </v-collapse>

                        <hr>
                        <v-collapse v-model="tokens.active">
                            <template v-slot:title>API TOKENS</template>
                            <template v-slot:default>
                                <router-link class="sidebar-link" :to="{ name: 'tokens.index' }" exact>
                                    <i class="fa fa-unlock w-3 mr-1"/>&nbsp;Index
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'tokens.create' }" exact>
                                    <i class="fa fa-key w-3 mr-1"/>&nbsp;Create
                                </router-link>
                            </template>
                        </v-collapse>

                        <hr>
                        <v-collapse v-model="dev.active">
                            <template v-slot:title>FRAMEWORK</template>
                            <template v-slot:default>
                                <router-link class="sidebar-link" :to="{ name: 'framework.bindings' }" exact>
                                    <i class="fa fa-tachometer-alt w-3 mr-1"/>&nbsp;Bindings
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'framework.providers' }" exact>
                                    <i class="fa fa-project-diagram w-3 mr-1"/>&nbsp;Providers
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'framework.sharing' }" exact>
                                    <i class="fa fa-sticky-note w-3 mr-1"/>&nbsp;Sharing
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'framework.logs' }" exact>
                                    <i class="fa fa-server w-3 mr-1"/>&nbsp;Logs
                                </router-link>
                            </template>
                        </v-collapse>

                        <hr>

                        <v-collapse v-model="kitchensink.active">
                            <template v-slot:title>KITCHEN SINK</template>
                            <template v-slot:default>
                                <router-link class="sidebar-link" :to="{ name: 'kitchensink.tabs' }" exact>
                                    <i class="fa fa-tachometer-alt w-3 mr-1"/> Tabs
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'kitchensink.cards' }" exact>
                                    <i class="fa fa-address-card-o w-3 mr-1"/> Cards
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'kitchensink.actions' }" exact>
                                    <i class="fa fa-tachometer-alt w-3 mr-1"/> Actions
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'kitchensink.typography' }" exact>
                                    <i class="fa fa-tachometer-alt w-3 mr-1"/> Text
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'kitchensink.forms' }" exact>
                                    <i class="fa fa-tachometer-alt w-3 mr-1"/> Forms
                                </router-link>
                                <router-link class="sidebar-link" :to="{ name: 'kitchensink.modals' }" exact>
                                    <i class="fa fa-window-maximize w-3 mr-1"/> Modals
                                </router-link>
                            </template>
                        </v-collapse>
                    </div>
                </aside>
            </transition>
            <main id="main">
                <transition name="fadeInLeft" mode="out-in">
                    <router-view :key="$route.name"/>
                </transition>
            </main>
        </section>
        <footer id="footer" class="text-center">
            <div>© 2020 Dan Alvidrez - All Rights Reserved.</div>
        </footer>
    </div>
</template>
