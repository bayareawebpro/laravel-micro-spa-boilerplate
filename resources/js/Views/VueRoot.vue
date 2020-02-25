<script>
    import Header from './Header'
    export default {
        name: "VueRoot",
        components:{
            'v-header':Header
        },
        beforeCreate() {
            this.$bind.mapGetters('Menus', {
                kitchensink: 'kitchensink',
                sidebar: 'sidebar',
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
            <v-sidebar v-model="sidebar.active">
                <router-link class="sidebar-link" :to="{ name: 'dashboard' }" exact>
                    <i class="fa fa-dashboard w-3 mr-1"/>&nbsp;Dashboard
                </router-link>
                <hr>

                <div v-for="(section, index) in sidebar.items">
                    <hr v-if="index > 0">
                    <v-collapse v-model="section.active">
                        <template v-slot:title>{{ section.name }}</template>
                        <template v-slot:default>
                            <div v-for="link in section.items">
                                <router-link tag="a" class="sidebar-link" tabindex="1" :to="link.to" exact>
                                    <i class="fa w-3 mr-1" :class="link.icon"/> {{ link.name }}
                                </router-link>
                            </div>
                        </template>
                    </v-collapse>
                </div>

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
            <p>© 2020 Dan Alvidrez - All Rights Reserved.</p>
        </footer>
    </div>
</template>
