<script>
    export default {
        name: "VueRoot",
        beforeCreate() {
            this.$bind.mapGetters('Menus', {
                kitchensink: 'kitchensink',
                tokens: 'tokens',
                users: 'users',
                dev: 'dev',
                right: 'right',
                left: 'left',
            })
            this.$bind.mapActions('Auth', {
                logout: 'logout',
            })
            this.$bind.mapGetters('Auth', {
                name: 'entity.name',
            })
            this.$bind.mapState('Auth', {
                $request: '$request',
                $errors: '$errors',
            })
        }
    }
</script>
<template>
    <header id="header">
        <button v-if="name" @click.prevent="left.active = !left.active" class="px-2 mr-2">
            <i class="fa fa-bars text-blue-600 hover:text-blue-200"/>
        </button>
        <a id="brand" href="/">
            <span>LaravelMicro</span><span>.app</span>
        </a>
        <ul class="flex flex-grow justify-end">
            <li class="ml-2 relative">
                <button
                    @click.prevent="right.active = !right.active"
                    class="btn btn-sm font-thin rounded-full bg-gray-600">
                    <i class="fa fa-user-circle"/>
                    <span class="hidden md:inline text-xs">
                            Account
                        </span>
                </button>
                <v-drop-down v-model="right.active">
                    <template v-slot:default>
                        <template v-if="name">
                            <router-link
                                :to="{ name: 'auth.account' }" exact
                                class="btn btn-block btn-xs btn-transparent">
                                <i class="fa fa-user w-2 mr-2"/>&nbsp;Edit Account
                            </router-link>
                            <v-action
                                @click="logout"
                                class="btn btn-block btn-xs btn-transparent mt-2 text-left">
                                <i class="fa fa-lock w-2 mr-2"/>&nbsp;Logout
                            </v-action>
                        </template>
                        <template v-else>
                            <router-link
                                :to="{ name: 'auth.login' }"
                                class="btn btn-block btn-xs btn-transparent">
                                <i class="fa fa-unlock w-3 mr-1"/>&nbsp;Login
                            </router-link>
                            <router-link
                                :to="{ name: 'auth.register' }"
                                class="btn btn-block btn-xs btn-transparent mt-2">
                                <i class="fa fa-user-plus w-3 mr-1"/>&nbsp;Register
                            </router-link>
                            <router-link
                                :to="{ name: 'auth.forgot' }"
                                class="btn btn-block btn-xs btn-transparent mt-2">
                                <i class="fa fa-user-plus w-3 mr-1"/>&nbsp;Forgot Password
                            </router-link>
                        </template>
                    </template>
                </v-drop-down>
            </li>
        </ul>
    </header>
</template>
