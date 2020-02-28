<script>
    import Header from './Header'
    export default {
        name: "VueRoot",
        components:{'v-header': Header},
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

            this.$bind.mapState('Config', {
                Config: (context)=>context.all(),
            })
            this.$bind.mapState('Auth', {
                Auth: ({$state})=>$state.all(),
            })
            this.$bind.mapState('Menus', {
                Menus: ({$state})=>$state.all(),
            })
            this.$bind.mapState('TokenResource', {
                TokenResource: ({$state})=>$state.all(),
            })
            this.$bind.mapState('UserResource', {
                UserResource: ({$state})=>$state.all(),
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
            </v-sidebar>
            <main id="main">
                <router-view :key="$route.name"/>
            </main>
        </section>
        <footer id="footer">
            <p>© 2020 Dan Alvidrez - All Rights Reserved.</p>
        </footer>
    </div>
</template>
