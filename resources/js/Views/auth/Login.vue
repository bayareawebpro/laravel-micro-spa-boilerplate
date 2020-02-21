<script>
    export default {
        name: "Login",
        data: () => ({
            user: {
                email: null,
                password: null,
                remember_me: null,
            }
        }),
        beforeCreate() {
            this.$bind.mapState('Auth', {
                $errors: '$errors',
            })
            this.$bind.mapActions('Auth', {
                isLoading: 'isLoading',
                submit: 'login',
            })
        },
        beforeDestroy() {
            this.$errors.clear()
        },
    }
</script>
<template>
    <div dusk="page-login" class="layout-centered">
        <div class="card my-12 w-full md:w-3/5">
            <div class="card-header">
                Login
            </div>
            <form ref="form" @submit.prevent="login(user)">
                <!-- Five columns -->
                <div class="card-content">
                    <v-form-message v-model="$errors.message" dusk="alert"/>
                    <div class="grid">
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="text"
                                name="email"
                                label="Email Address"
                                v-model="user.email"
                                @change="$errors.forget('email')"
                                :invalid="$errors.has('email')"
                                :help="$errors.first('email', 'Enter your email.')">
                            </v-input>
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                name="password"
                                type="password"
                                label="Password"
                                v-model="user.password"
                                @change="$errors.forget('password')"
                                :invalid="$errors.has('password')"
                                :help="$errors.first('password', 'Enter your secure password.')">
                            </v-input>
                        </div>
                    </div>
                    <v-input-switch
                        v-model="user.remember_me"
                        dusk="remember_me"
                        name="remember_me"
                        label="Remember Me."
                        @change="$errors.forget('remember_me')"
                        :invalid="$errors.has('remember_me')"
                        :help="$errors.first('remember_me', 'Remember Me.')">
                    </v-input-switch>
                </div>
                <div class="card-actions">
                    <v-action
                        dusk="submit"
                        @click="submit(user)"
                        :loading="isLoading('login')"
                        class="btn-blue btn-lg">
                        Login
                    </v-action>
                </div>
            </form>
        </div>
    </div>
</template>
