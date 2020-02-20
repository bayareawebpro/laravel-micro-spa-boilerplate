<script>
    /** @property $errors */
    /** @property entity */
    /** @method update */
    /** @method store */
    export default {
        name: "TokenShow",
        beforeCreate() {
            this.$bind.mapGetters('TokenResource', {
                entity: 'entity',
            })
            this.$bind.mapState('TokenResource', {
                $errors: '$errors',
            })
        },
        created() {
            this.$errors.clear()
        },
        beforeDestroy() {
            this.$errors.clear()
        },
    }
</script>
<template>
    <div class="layout p-4" v-if="entity">
        <form ref="form" @submit.prevent>
            <div class="card">
                <div class="card-header">
                    {{ entity.name || 'New Token' }}
                </div>
                <div class="card-content">
                    {{ entity }}
                </div>
                <div class="card-actions">
                    <router-link
                        dusk="entry-show"
                        class="btn btn-yellow"
                        :to="{name: 'tokens.edit', params: {id: entity.id}}">
                        <i class="fa fa-edit"/> Edit
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</template>
