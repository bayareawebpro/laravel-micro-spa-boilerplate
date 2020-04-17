<script>
    export default {
        name: "Login",
        data: () => ({
            user: {
                email: '',
                password: '',
                remember_me: true,
            }
        }),
        beforeCreate() {
            this.$bind.mapActions('Auth', {
                isLoading: 'isLoading',
                login: 'login',
            })
            this.$bind.mapState('Auth', {
                $errors: '$errors',
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
                Login
            </div>
            <form ref="form" @submit.prevent="login(user)">
                <div class="card-content">
                    <div class="alert info mb-4">Demo Mode Enabled!</div>
                    <v-form-message v-model="$errors.message" dusk="alert"/>
                    <div class="grid">
                        <div class="grid-item w-full">
                            <v-input
                                type="text"
                                name="email"
                                label="Email Address"
                                v-model="user.email"
                                :required="true"
                                autocomplete="email-address"
                                @change="$errors.forget('email')"
                                :invalid="$errors.has('email')"
                                :help="$errors.first('email', 'Enter your email.')"
                            />
                        </div>
                        <div class="grid-item w-full">
                            <v-input
                                name="password"
                                type="password"
                                label="Password"
                                :required="true"
                                v-model="user.password"
                                autocomplete="current-password"
                                @change="$errors.forget('password')"
                                :invalid="$errors.has('password')"
                                :help="$errors.first('password', 'Enter your secure password.')"
                            />
                        </div>
                    </div>
                    <v-input-switch
                        dusk="remember_me"
                        name="remember_me"
                        label="Remember Me."
                        v-model="user.remember_me"
                        @change="$errors.forget('remember_me')"
                        :invalid="$errors.has('remember_me')"
                        :help="$errors.first('remember_me', 'Remember Me.')">
                    </v-input-switch>
                </div>
                <div class="card-actions flex">
                    <v-action
                        type="submit"
                        dusk="action-login"
                        :loading="isLoading('login')"
                        class="btn-blue btn-lg">
                        <i class="fa fa-unlock"></i> Login
                    </v-action>
                    <div class="flex-grow"></div>
                    <router-link
                        dusk="link-forgot"
                        :to="$link('auth.forgot')"
                        class="self-center text-sm mx-4">
                        Reset Password
                    </router-link>
                    <router-link
                        dusk="link-register"
                        :to="$link('auth.register')"
                        class="self-center text-sm">
                        Register
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
