<script>
    export default {
        name: "DashboardLayout",
        // beforeCreate() {
        //     this.$bind.mapGetters('Dashboard', {
        //         collection: 'collection',
        //     })
        //     this.$bind.mapState('Dashboard', {
        //         $state: '$state',
        //     })
        // },
    }
</script>
<template>
    <div class="layout p-4">
        <h1 class="page-title">Dashboard</h1>
        <p class="page-lead">Overview</p>


        <router-link :to="$link('screen')">Screen</router-link>
        <router-view/>
    </div>
</template>
