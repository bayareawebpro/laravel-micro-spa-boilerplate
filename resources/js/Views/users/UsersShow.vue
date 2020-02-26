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
    </div>
</template>
