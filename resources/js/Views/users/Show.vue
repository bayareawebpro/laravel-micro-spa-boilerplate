<script>
    export default {
        name: "UsersShow",
        beforeCreate() {
            this.$bind.mapGetters('UserResource', {
                hasTokens: 'entity.tokens.length',
                entity: 'entity',
                modal: 'modal',
            })
        },
    }
</script>
<template>
    <div class="lg:max-w-4xl mx-auto" v-if="entity">
        <div class="card">
            <div class="card-header flex">
                <div>{{ entity.name }}</div>
                <div class="badge badge-red ml-auto">{{ entity.role }}</div>
            </div>
            <div class="card-content">
                {{ entity.email }}
                {{ entity.role }}
            </div>
            <div class="card-actions">
                <router-link
                    tag="button"
                    dusk="entry-show"
                    class="btn btn-blue"
                    :to="$link('users.edit').withParams(entity)">
                    <i class="fa fa-edit"/> Edit
                </router-link>
            </div>
        </div>

        <div v-if="hasTokens" class="card mt-4">
            <div class="card-header">
                Tokens
            </div>
            <div v-for="token in entity.tokens" class="list-group rounded-none">
                <router-link
                    tag="div"
                    dusk="entry-show"
                    class="list-group-item"
                    :to="$link('tokens.show').withParams({id: token.id})">
                    <i class="fa fa-key text-blue-500"/>
                    <strong>{{ token.name }}</strong>
                </router-link>
            </div>
        </div>
    </div>
</template>
