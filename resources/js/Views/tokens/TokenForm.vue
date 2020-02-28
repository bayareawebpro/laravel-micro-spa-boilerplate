<script>
    export default {
        name: "TokenEdit",
        beforeCreate() {
            this.$bind.mapGetters('TokenResource', {
                abilities: 'abilities',
                entity: 'entity',
            })
            this.$bind.mapActions('TokenResource', {
                update: 'update',
                create: 'create',
                store: 'store',
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
                    <div class="grid">
                        <div class="grid-item flex-grow">
                            <v-input
                                type="text"
                                label="Name"
                                name="name"
                                v-model="entity.name"
                                @change="$errors.forget('name')"
                                :invalid="$errors.has('name')"
                                :help="$errors.first('name', 'Enter your name.')">
                            </v-input>
                        </div>
                        <div class="grid-item flex-shrink pb-3">
                            <v-action
                                dusk="action-save"
                                class="btn-blue"
                                @click="entity.abilities.push('*')">
                                Add Ability
                            </v-action>
                        </div>
                    </div>

                    <v-form-message
                        class="alert-warn"
                        :value="$errors.has(`abilities`)"
                        :dismissible="false">
                        {{ $errors.first(`abilities`) }}
                    </v-form-message>

                    <div class="grid"  v-for="(ability, index) in entity.abilities">
                        <div class="grid-item flex-grow">
                            <v-input-select
                                type="text"
                                label="Ability"
                                name="ability"
                                v-model="entity.abilities[index]"
                                @change="$errors.forget(`abilities.${index}`)"
                                :invalid="$errors.has(`abilities.${index}`)"
                                :help="$errors.first(`abilities.${index}`, 'Enter ability name.')"
                                :options="abilities"
                            />
                        </div>
                        <div class="grid-item flex-shrink pb-3">
                            <v-action
                                dusk="action-save"
                                class="btn-red self-start"
                                @click="entity.abilities.splice(index,1)">
                                <i class="fa fa-remove"></i>
                            </v-action>
                        </div>
                    </div>
                </div>
                <div class="card-actions">
                    <v-action
                        v-if="entity.id"
                        dusk="action-update"
                        class="btn-lg btn-green"
                        @click="update(entity)">
                        Update
                    </v-action>
                    <v-action
                        v-else
                        dusk="action-save"
                        class="btn-lg btn-green"
                        @click="store(entity, false)">
                        Save
                    </v-action>
                </div>
            </div>
        </form>
        <v-modal
            dusk="modal-destroy"
            v-model="entity.token"
            @closed="$router.go(-1)">
            <template v-slot:title>
                Token Created
            </template>
            <template v-slot:content>
                <p>This token will not be shown again, please copy it for your records.</p>
                <v-input
                    ref="token"
                    type="text"
                    :value="entity.token"
                    label="Token"
                    help="Keep this token."
                />
                <v-action @click="()=>$refs.token.clipboard()" class="btn-green btn-lg">
                    Copy
                </v-action>
            </template>
            <template v-slot:actions>
                <v-action
                    :focus="true"
                    dusk="destroy-confirm"
                    @click="entity.token = null" class="btn-green">
                    <i class="fa fa-check-circle"/> Done
                </v-action>
            </template>
        </v-modal>
    </div>
</template>
