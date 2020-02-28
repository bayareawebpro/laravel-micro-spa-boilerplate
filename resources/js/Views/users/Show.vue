<script>
    export default {
        name: "UsersShow",
        beforeCreate() {
            this.$bind.mapGetters('UserResource', {
                entity: 'entity',
                modal: 'modal',
            })
            this.$bind.mapState('UserResource', {
                $link: '$link',
            })
        },
    }
</script>
<template>
    <div class="layout p-4" v-if="entity">
        <div class="card">
            <div class="card-header">
                {{ entity.name }} <div class="badge badge-red">{{ entity.role }}</div>
            </div>
            <div class="card-content">
                {{ entity.email }}
                {{ entity.role }}
            </div>
            <div class="card-actions">
                <v-action
                    dusk="modal-activate"
                    @click="modal = entity" class="btn-green">
                    <i class="fa fa-check-circle"/> Action
                </v-action>
                <router-link
                    tag="button"
                    dusk="entry-show"
                    class="btn btn-yellow"
                    :to="$link('users.edit').withParams({id: entity.id})">
                    <i class="fa fa-edit"/> Edit
                </router-link>
            </div>
        </div>
    </div>
</template>
