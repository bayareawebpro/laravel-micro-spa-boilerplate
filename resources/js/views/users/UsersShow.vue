<script>
    export default {
        name: "UsersShow",
        beforeCreate() {
            this.$bind.mapGetters('UserResource', {
                entity: 'entity',
                modal: 'modal',
            })
        },
    }
</script>
<template>
    <div class="layout p-4" v-if="entity">
        <div class="card">
            <div class="card-header">
                {{ entity.name }} | {{ entity.email }}
            </div>
            <div class="card-content">
                <v-action
                    dusk="modal-activate"
                    @click="modal = entity" class="btn-green">
                    <i class="fa fa-check-circle"/> Action
                </v-action>
                <router-link
                    dusk="entry-show"
                    class="btn btn-yellow"
                    :to="{name: 'users.edit', params: {id: entity.id}}">
                    <i class="fa fa-edit"/> Edit
                </router-link>
            </div>
        </div>
        <v-modal v-model="modal" dusk="modal-destroy">
            <template v-slot:title>
                Dispatch Action
            </template>
            <template v-slot:content>
                <p>Dispatch an action against the entity.</p>
            </template>
            <template v-slot:actions>
                <v-action
                    dusk="destroy-confirm"
                    @click="modal = null" class="btn-green">
                    <i class="fa fa-check-circle"/> DO IT
                </v-action>
                <v-action
                    dusk="destroy-cancel"
                    @click="modal = null" class="btn-red ml-auto">
                    <i class="fa fa-close"/> NAH
                </v-action>
            </template>
        </v-modal>
    </div>
</template>
