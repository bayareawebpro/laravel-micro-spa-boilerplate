<script>
    /** @property destroying */
    /** @property resource */
    /** @property $errors */
    /** @method destroy */
    /** @method index */
    export default {
        name: "UserResource",
        beforeCreate() {
            this.$bind.mapActions('TokenResource', {
                index: 'index',
                destroy: 'destroy',
            })
            this.$bind.mapState('TokenResource', {
                $errors: '$errors',
            })
            this.$bind.mapGetters('TokenResource', {
                destroying: 'destroying',
                resource: 'resource',
            })
        },
    }
</script>
<template>
    <div class="layout p-4">
        <v-resource
            v-model="resource"
            :searchable="true">
            <template v-slot:title>
                <i class="fa fa-key"/> Tokens
            </template>
            <template v-slot:actions>
                <router-link
                    dusk="action-create"
                    class="btn btn-blue"
                    :to="{name: 'tokens.create'}">
                    <i class="fa fa-key"/>
                    <span class="hidden sm:inline">Add</span>
                </router-link>
            </template>
            <template v-slot:entries="{entries}">
                <div
                    dusk="entry"
                    class="card my-4 text-sm"
                    v-for="entry in entries">
                    <div class="card-header p-2 flex">
                        <router-link
                            dusk="entry-show"
                            class="block"
                            :to="{name: 'tokens.show', params: {id: entry.id}}">
                            <i class="fa fa-key text-blue-500"/> <strong>{{ entry.name }}</strong>
                        </router-link>
                        <v-action
                            dusk="entry-destroy"
                            @click="destroying = entry" class="btn-red btn-xs ml-auto">
                            <i class="fa fa-trash"/> Destroy
                        </v-action>
                    </div>
                    <div class="card-content">
                        <div class="grid mb-4">
                            <div class="grid-item w-1/2 sm:w-1/3">
                                <strong>Tokenable</strong><br>
                                <i class="fa fa-cubes text-blue-500"/>
                                {{ entry.tokenable_type }} ({{ entry.tokenable_id }})
                            </div>
                            <div class="grid-item w-1/2  sm:w-1/3">
                                <strong>Abilities</strong><br>
                                <i class="fa fa-lock-open text-blue-500"/>
                                {{ entry.abilities.join(',') }}
                            </div>
                        </div>
                        <div class="grid">
                            <div class="grid-item w-1/2  sm:w-1/3">
                                <strong>Last Used</strong><br>
                                <i class="fa fa-clock text-blue-500"/>
                                {{ entry.last_used_at || '-' }}
                            </div>
                            <div class="grid-item w-1/2  sm:w-1/3">
                                <strong>Created</strong><br>
                                <i class="fa fa-clock text-blue-500"/>
                                {{ entry.created_at }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </v-resource>

        <v-modal v-model="destroying" dusk="modal-destroy">
            <template v-slot:title>
                Destroy Token?
            </template>
            <template v-slot:content>
                <p><strong>Username:</strong> {{ destroying.tokenable.name }}</p>
                <p><strong>Tokenable:</strong> {{ destroying.tokenable_type }} ({{ destroying.tokenable_id }})</p>
                <p><strong>Abilities:</strong> {{ destroying.abilities.join(',') }}</p>
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
