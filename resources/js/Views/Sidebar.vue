<script>
    export default {
        name: "SidebarLeft",
        beforeCreate() {
            this.$bind.mapGetters('Menus', {
                sidebar: 'sidebar',
            })
        }
    }
</script>
<template>
    <v-sidebar v-model="sidebar.active">
        <router-link class="sidebar-link mb-3" :to="{ name: 'dashboard' }" exact>
            <i class="fa fa-dashboard w-3 mr-1"/>&nbsp;Dashboard
        </router-link>
        <div v-for="(section, index) in sidebar.items">
            <v-collapse v-model="section.active" class="mb-3">
                <template v-slot:title>
                    <span class="sidebar-header">
                        {{ section.name }}
                    </span>
                </template>
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
</template>
