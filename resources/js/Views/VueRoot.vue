<script>
    export default {
        name: "VueRoot",
        beforeCreate() {
            this.$bind.mapGetters('Menus', {
                kitchensink: 'kitchensink',
                tokens: 'tokens',
                users: 'users',
                dev: 'dev',
                right: 'right',
                left: 'left',
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
        <v-header/>
        <section id="content">
            <v-sidebar v-model="left.active">
                <router-link class="sidebar-link" :to="{ name: 'dashboard' }" exact>
                    <i class="fa fa-dashboard w-3 mr-1"/>&nbsp;Dashboard
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
                            <i class="fa fa-window-restore w-3 mr-1"/> Tabs
                        </router-link>
                        <router-link class="sidebar-link" :to="{ name: 'kitchensink.cards' }" exact>
                            <i class="fa fa-address-card w-3 mr-1"/> Cards
                        </router-link>
                        <router-link class="sidebar-link" :to="{ name: 'kitchensink.actions' }" exact>
                            <i class="fa fa-arrow-circle-right w-3 mr-1"/> Actions
                        </router-link>
                        <router-link class="sidebar-link" :to="{ name: 'kitchensink.typography' }" exact>
                            <i class="fa fa-font w-3 mr-1"/> Text
                        </router-link>
                        <router-link class="sidebar-link" :to="{ name: 'kitchensink.forms' }" exact>
                            <i class="fa fa-edit w-3 mr-1"/> Forms
                        </router-link>
                        <router-link class="sidebar-link" :to="{ name: 'kitchensink.modals' }" exact>
                            <i class="fa fa-window-maximize w-3 mr-1"/> Modals
                        </router-link>
                        <router-link class="sidebar-link" :to="{ name: 'kitchensink.charts' }" exact>
                            <i class="fa fa-chart-line w-3 mr-1"/> Charts
                        </router-link>
                    </template>
                </v-collapse>
            </v-sidebar>
            <main id="main">
                <transition name="fadeInLeft" mode="out-in">
                    <router-view :key="$route.name"/>
                </transition>
            </main>
        </section>
        <footer id="footer">
            <div>© 2020 Dan Alvidrez - All Rights Reserved.</div>
        </footer>
    </div>
</template>
