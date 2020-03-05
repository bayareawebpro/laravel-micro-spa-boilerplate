<script>
    export default {
        name: "TokenLayout",
        props:['title', 'subtitle'],
        beforeCreate() {
            this.$bind.mapActions('TokenResource', {
                destroy: 'destroy',
            })
            this.$bind.mapGetters('TokenResource', {
                destroying: 'destroying',
            })
        },
    }
</script>
<template>
    <div class="flex flex-col h-full">
        <div class="bg-gray-800 py-3 px-6">
            <router-link :to="{name: 'tokens.index'}" class="page-title block">
                {{ title }}
            </router-link>
            <small class="page-lead">{{ subtitle }}</small>
        </div>
        <div class="layout p-4">
            <transition name="fadeInLeft" mode="out-in" :duration="90">
                <router-view :key="$route.name"/>
            </transition>
        </div>

        <v-modal v-model="destroying" dusk="modal-destroy">
            <template v-slot:title>
                Destroy Token?
            </template>
            <template v-slot:content>
                <p v-if="destroying.tokenable"><strong>Username:</strong> {{ destroying.tokenable.name }}</p>
                <p><strong>Tokenable:</strong> {{ destroying.tokenable_type }} ({{ destroying.tokenable_id }})</p>
                <p><strong>Abilities:</strong> {{ destroying.abilities.join(', ') }}</p>
            </template>
            <template v-slot:actions>
                <v-action
                    :focused="true"
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
