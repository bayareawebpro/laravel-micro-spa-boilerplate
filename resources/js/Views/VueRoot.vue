<script>
    import Header from './Header'
    import Sidebar from './Sidebar'
    export default {
        name: "VueRoot",
        components:{
            'v-header': Header,
            'v-sidebar-left': Sidebar,
        },
        beforeCreate() {
            this.$bind.mapState('Auth', {
                Auth: ({$state})=>$state.all(),
            })
            this.$bind.mapGetters('Auth', {
                loggedIn: 'entity.id',
            })
            this.$bind.mapState('Config', {
                Config: (context)=>context.all(),
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
            <v-sidebar-left v-if="loggedIn"/>
            <main id="main">
                <router-view :key="$route.name"/>
            </main>
        </section>
        <footer id="footer">
            <p>© 2020 Dan Alvidrez - All Rights Reserved.</p>
        </footer>
    </div>
</template>
