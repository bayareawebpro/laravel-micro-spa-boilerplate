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
            <i class="fa fa-tachometer-alt w-3 mr-2"/>&nbsp;Dashboard
        </router-link>
        <div v-for="(section, index) in sidebar.items">
            <v-guard :roles="section.roles">
                <template v-slot:default>
                    <v-collapse v-model="section.active" class="mb-3">
                        <template v-slot:title>
                            <span class="sidebar-header">{{ section.name }}</span>
                        </template>
                        <template v-slot:default>
                            <div v-for="link in section.items">
                                <router-link tag="a" class="sidebar-link" tabindex="1" :to="link.to" exact>
                                    <i class="fa w-3 mr-1" :class="link.icon"/> {{ link.name }}
                                </router-link>
                            </div>
                        </template>
                    </v-collapse>
                </template>
            </v-guard>
        </div>
    </v-sidebar>
</template>
