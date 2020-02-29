<script>
    /** @method $link */
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
                $link: '$link',
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
    <div class="lg:max-w-4xl mx-auto" v-if="entity">
        <form ref="form" @submit.prevent>
            <div class="card">
                <div class="card-header">
                    {{ entity.name }}
                </div>
                <div class="card-content">
                    <div class="grid mb-4">
                        <div class="grid-item w-full sm:w-1/3">
                            <strong>Tokenable</strong><br>
                            <router-link
                                dusk="entry-user-show"
                                class="block text-sm"
                                :to="{name: 'users.show', params: {id: entity.tokenable_id}}">
                                <i class="fa fa-user"/>
                                {{ entity.tokenable_type }} ({{entity.tokenable_id}})
                            </router-link>
                        </div>
                        <div class="grid-item w-full sm:w-2/3">
                            <strong>Abilities</strong><br>
                            <i class="fa fa-lock-open text-blue-500"/>
                            {{ entity.abilities.join(', ') }}
                        </div>
                    </div>
                    <div class="grid">
                        <div class="grid-item w-full sm:w-1/3">
                            <strong>Last Used</strong><br>
                            <i class="fa fa-clock text-blue-500"/>
                            {{ entity.last_used_at || '-' }}
                        </div>
                        <div class="grid-item w-full sm:w-1/3">
                            <strong>Created</strong><br>
                            <i class="fa fa-clock text-blue-500"/>
                            {{ entity.created_at }}
                        </div>
                        <div class="grid-item w-full sm:w-1/3">
                            <strong>Updated</strong><br>
                            <i class="fa fa-clock text-blue-500"/>
                            {{ entity.updated_at }}
                        </div>
                    </div>
                </div>
                <div class="card-actions">
                    <router-link
                        dusk="entry-show"
                        class="btn btn-blue"
                        :to="{name: 'tokens.edit', params: {id: entity.id}}">
                        <i class="fa fa-edit"/> Edit
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</template>
