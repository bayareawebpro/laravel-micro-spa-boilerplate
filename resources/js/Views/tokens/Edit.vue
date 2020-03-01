<script>
    export default {
        name: "TokenEdit",
        beforeCreate() {
            this.$bind.mapGetters('TokenResource', {
                abilities: 'abilities',
                entity: 'entity',
            })
            this.$bind.mapActions('TokenResource', {
                backToIndex: 'reloadCollection',
                update: 'update',
                create: 'create',
                store: 'store',
            })
            this.$bind.mapState('TokenResource', {
                $errors: '$errors',
                grants: 'grants',
            })
        },
        created() {
            this.$errors.clear()
            if(!this.entity.abilities.length){
                this.entity.abilities.push({})
            }
            if(this.$route.query.user_id){
                this.entity.user_id = this.$route.query.user_id
            }
        },
        beforeDestroy() {
            this.$errors.clear()
        },
    }
</script>
<template>
    <div v-if="entity" class="lg:max-w-4xl mx-auto">
        <form ref="form" @submit.prevent="entity.id ? update(entity) : store(entity, false)">
            <div class="card">
                <div class="card-header">
                    {{ entity.name || 'New Token' }}
                </div>
                <div class="card-content">

                    <div class="grid">
                        <div class="grid-item flex-grow">
                            <v-input
                                type="text"
                                name="name"
                                label="Name"
                                :required="true"
                                v-model="entity.name"
                                @change="$errors.forget('name')"
                                :invalid="$errors.has('name')"
                                :help="$errors.first('name', 'Enter your name.')">
                            </v-input>
                        </div>
                        <div class="grid-item flex-shrink pb-3">
                            <v-action
                                dusk="action-add"
                                class="btn-blue"
                                @click="entity.abilities.push('*')">
                                Add Ability
                            </v-action>
                        </div>
                    </div>

                    <v-form-message
                        class="alert-warn"
                        :dismissible="false"
                        :value="$errors.has(`abilities`)">
                        {{ $errors.first(`abilities`) }}
                    </v-form-message>

                    <div class="grid"  v-for="(ability, index) in entity.abilities">
                        <div class="grid-item flex-grow">
                            <v-input-select
                                type="text"
                                label="Ability"
                                name="ability"
                                :options="grants"
                                :required="true"
                                v-model="entity.abilities[index]"
                                @change="$errors.forget(`abilities.${index}`)"
                                :invalid="$errors.has(`abilities.${index}`)"
                                :help="$errors.first(`abilities.${index}`, 'Enter ability name.')"
                            />
                        </div>
                        <div class="grid-item flex-shrink pb-3">
                            <v-action
                                dusk="action-remove"
                                class="btn-red self-start"
                                @click="entity.abilities.splice(index,1)">
                                <i class="fa fa-times"/>
                            </v-action>
                        </div>
                    </div>
                </div>
                <div class="card-actions">
                    <v-action
                        type="submit"
                        dusk="action-save"
                        class="btn-lg btn-green">
                        {{ entity.id ? 'Update' : 'Create' }}
                    </v-action>
                </div>
            </div>
        </form>
        <v-modal
            dusk="modal-destroy"
            v-model="entity.token"
            @closed="$router.push($link('tokens.edit').withParams({id:entity.id}))">
            <template v-slot:title>
                Token Created
            </template>
            <template v-slot:content>
                <p>This token will not be shown again, please copy it for your records.</p>
                <v-input
                    ref="token"
                    type="text"
                    name="token"
                    label="Token"
                    help="Authentication Token."
                    :value="entity.token"
                    :aria-readonly="true"
                />
                <v-action
                    :focus="true"
                    class="btn-green btn-xl"
                    @click="$refs.token.clipboard()">
                    <i class="fa fa-clipboard"/> Copy
                </v-action>
            </template>
            <template v-slot:actions>
                <v-action
                    dusk="modal-done"
                    @click="entity.token = null" class="btn-green">
                    <i class="fa fa-check-circle"/> Done
                </v-action>
            </template>
        </v-modal>
    </div>
</template>
