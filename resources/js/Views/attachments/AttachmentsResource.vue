<script>
    export default {
        name: "UserResource",
        beforeCreate() {
            this.$bind.mapActions('Attachments', {
                isLoading: 'isLoading',
                destroy: 'destroy',
                index: 'index',
            })
            this.$bind.mapGetters('Attachments', {
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
            :loading="isLoading('attachments.index')"
            :searchable="true">
            <template v-slot:title>
                <i class="fa fa-photo"/> Attachments
            </template>
            <template v-slot:actions>
                <router-link
                    dusk="action-create"
                    class="btn btn-blue"
                    :to="{name: 'attachments.create'}">
                    <i class="fa fa-user-plus"/>
                    <span class="hidden sm:inline">Create</span>
                </router-link>
            </template>
            <template v-slot:entries="{entries}">
                <div class="grid">
                    <div v-for="entry in entries" class="grid-item sm:w-1/4 self-center">
                        <router-link
                            tag="div" :to="{name: 'attachments.show', params: {id: entry.id}}">
                            <img loading="lazy" :src="entry.url" class="rounded shadow mx-auto">
                        </router-link>
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
