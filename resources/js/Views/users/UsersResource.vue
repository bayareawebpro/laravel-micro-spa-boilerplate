<script>
    export default {
        name: "UserResource",
        beforeCreate() {
            this.$bind.mapActions('UserResource', {
                isLoading: 'isLoading',
                destroy: 'destroy',
                index: 'index',
            })
            this.$bind.mapGetters('UserResource', {
                destroying: 'destroying',
                resource: 'resource',
                modal: 'modal',
            })
        },
    }
</script>
<template>
    <div class="layout p-4">
        <v-resource
            v-model="resource"
            :loading="isLoading('users.index')"
            :searchable="true">
            <template v-slot:title>
                <i class="fa fa-users"/> Users
            </template>
            <template v-slot:actions>
                <router-link
                    dusk="action-create"
                    class="btn btn-blue"
                    :to="{name: 'users.create'}">
                    <i class="fa fa-user-plus"/>
                    <span class="hidden sm:inline">Create</span>
                </router-link>
            </template>
            <template v-slot:entries="{entries}">
                <div v-for="entry in entries" dusk="entry" class="card mb-2">
                    <div class="card-header p-2">
                        <div class="grid">
                            <div class="grid-item text-xs">
                                <router-link
                                    tag="button"
                                    tabindex="0"
                                    dusk="entry-show"
                                    class="block text-sm"
                                    :to="{name: 'users.show', params: {id: entry.id}}">
                                    <i class="fa fa-user"/> {{ entry.name }}
                                </router-link>
                                {{ entry.email }}
                            </div>
                            <div class="grid-item text-xs ml-auto">
                                <div class="badge float-right" :class="{
                                    'badge-yellow': entry.role === 'editor',
                                    'badge-green': entry.role === 'admin',
                                    'badge-red': entry.role === 'guest',
                                }">{{ entry.role }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-actions p-2">
                        <div class="grid">
                            <div class="grid-item text-xs">
                                Created: {{ entry.created_at }} |
                                Updated: {{ entry.updated_at }}
                            </div>
                            <div class="grid-item ml-auto">
                                <v-action
                                    dusk="action-destroy"
                                    @click="destroying = entry" class="btn-red btn-xs ml-auto">
                                    <i class="fa fa-trash"/> Destroy
                                </v-action>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </v-resource>

        <v-modal v-model="destroying" dusk="modal-destroy">
            <template v-slot:title>
                Destroy Entity?
            </template>
            <template v-slot:content>
                <div class="alert warn">This action is irreversible.</div>
            </template>
            <template v-slot:actions>
                <v-action
                    :focus="true"
                    dusk="destroy-confirm"
                    @click="destroy(destroying)" class="btn-green">
                    <i class="fa fa-check-circle"/> Destroy
                </v-action>
                <v-action
                    dusk="destroy-cancel"
                    @click="destroying = null" class="btn-red ml-auto">
                    <i class="fa fa-close"/> Cancel
                </v-action>
            </template>
        </v-modal>
    </div>
</template>
