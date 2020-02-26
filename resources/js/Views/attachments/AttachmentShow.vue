<script>
    export default {
        name: "AttachmentShow",
        beforeCreate() {
            this.$bind.mapGetters('Attachments', {
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
                {{ entity.name }}
            </div>
            <div class="card-content">
                <router-link
                    dusk="entry-show"
                    class="btn btn-yellow"
                    :to="{name: 'attachments.edit', params: {id: entity.id}}">
                    <i class="fa fa-edit"/> Edit
                </router-link>
            </div>
        </div>
    </div>
</template>
