<script>
    /** @property $errors */
    /** @method isLoading */
    /** @method submit */
    export default {
        name: "Register",
        data: () => ({
            entity: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        }),
        beforeCreate() {
            this.$bind.mapActions('Auth', {
                isLoading: 'isLoading',
                submit: 'register',
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
                Register
            </div>
            <form ref="form" @submit.prevent="submit(entity)">
                <div class="card-content">
                    <v-form-message v-model="$errors.message"/>
                    <div class="grid">
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="text"
                                name="name"
                                label="Name"
                                v-model="entity.name"
                                @change="$errors.forget('name')"
                                :invalid="$errors.has('name')"
                                :help="$errors.first('name', 'Enter your name.')"
                                autocomplete="name"
                                :required="true"
                            />
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="text"
                                name="email"
                                label="Email Address"
                                v-model="entity.email"
                                @change="$errors.forget('email')"
                                :invalid="$errors.has('email')"
                                :help="$errors.first('email', 'Enter your email.')"
                                autocomplete="email-address"
                                :required="true"
                            />
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="password"
                                name="password"
                                label="Password"
                                v-model="entity.password"
                                @change="$errors.forget('password')"
                                :invalid="$errors.has('password')"
                                :help="$errors.first('password', 'Enter your secure password.')"
                                autocomplete="new-password"
                                :required="true"
                            />
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="password"
                                label="Password Confirmation"
                                name="password_confirmation"
                                v-model="entity.password_confirmation"
                                @change="$errors.forget('password_confirmation')"
                                :invalid="$errors.has('password_confirmation')"
                                :help="$errors.first('password_confirmation', 'Confirm your secure password.')"
                                autocomplete="new-password"
                                :required="true"
                            />
                        </div>
                    </div>
                </div>
                <div class="card-actions flex">
                    <v-action
                        type="submit"
                        dusk="action-register"
                        :loading="isLoading('auth.register')"
                        class="btn btn-blue btn-lg">
                        Register
                    </v-action>
                    <div class="flex-grow"></div>
                    <router-link
                        dusk="link-login"
                        :to="$link('auth.login')"
                        class="self-center text-sm">
                        Login
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
