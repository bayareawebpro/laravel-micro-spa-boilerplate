<script>
    export default {
        name: "PasswordForgot",
        data: () => ({
            entity: {
                email: null,
                password: null,
                remember_me: null,
            }
        }),
        beforeCreate() {
            this.$bind.mapActions('Auth', {
                submit: 'forgot',
            })
            this.$bind.mapState('Auth', {
                $errors: '$errors',
                $link: '$link',
            })
        },
        beforeDestroy() {
            this.$errors.clear()
        },
    }
</script>
<template>
    <div class="layout-centered md:max-w-xl">
        <div class="card">
            <div class="card-header">
                Forgot Password
            </div>
            <form ref="form" @submit.prevent>
                <div class="card-content">
                    <v-form-message v-model="$errors.message"/>
                    <v-input
                        type="text"
                        name="email"
                        label="Email Address"
                        v-model="entity.email"
                        @change="$errors.forget('email')"
                        :invalid="$errors.has('email')"
                        :help="$errors.first('email', 'Enter your email.')"
                    />
                </div>
                <div class="card-actions flex">
                    <v-action @click="submit(entity)" class="btn-blue">
                        Send Reset Link
                    </v-action>
                    <div class="flex-grow"></div>
                    <router-link
                        dusk="link-register"
                        :to="$link('auth.login')"
                        class="self-center text-sm">
                        Login
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
