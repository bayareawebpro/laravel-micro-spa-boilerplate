<script>
    export default {
        name: "PasswordForgot",
        data: () => ({
            sent: false,
            entity: {
                email: null,
                password: null,
                remember_me: null,
            }
        }),
        beforeCreate() {
            this.$bind.mapActions('Auth', {
                isLoading: 'isLoading',
                submit: 'forgot',
            })
            this.$bind.mapState('Auth', {
                $errors: '$errors',
            })
            this.$bind.mapGetters('Auth', {
                sent: 'sent',
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
    <div class="layout-centered md:max-w-xl">
        <div class="card">
            <div class="card-header">
                Forgot Password
            </div>
            <form v-if="!sent" ref="form" @submit.prevent="submit(entity)">
                <div class="card-content">
                    <v-form-message v-model="$errors.message"/>
                    <v-input
                        type="text"
                        name="email"
                        :required="true"
                        label="Email Address"
                        v-model="entity.email"
                        @change="$errors.forget('email')"
                        :invalid="$errors.has('email')"
                        :help="$errors.first('email', 'Enter your email.')"
                    />
                </div>
                <div class="card-actions flex">
                    <v-action
                        type="submit"
                        dusk="action-submit"
                        :loading="isLoading('auth.forgot')"
                        class="btn-blue">
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
            <div v-else class="card-content">
                <div class="alert success font-bold">
                    <i class="fa fa-check-circle mr-2"/> Sent Successfully.
                </div>
                <p class="text-sm">Please check your email for further instructions.</p>
            </div>
        </div>
    </div>
</template>
