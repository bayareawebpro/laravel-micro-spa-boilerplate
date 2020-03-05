<script>
    export default {
        name: "PasswordReset",
        data: () => ({
            entity: {
                email: '',
                password:'',
                password_confirmation: '',
            }
        }),
        beforeCreate() {
            this.$bind.mapActions('Auth', {
                submit: 'reset',
            })
            this.$bind.mapState('Auth', {
                $errors: '$errors',
            })
        },
        created() {
            this.entity.email = this.$route.query.email || null
            this.entity.token = this.$route.params.token || null
        },
        beforeRouteEnter(to, from, next){
            next(vm=>{
                next(vm.$route.params.token || {name:'auth.forgot'})
            })
        }
    }
</script>
<template>
    <div class="layout-centered md:max-w-xl">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <form ref="form" @submit.prevent>
                <div class="card-content">
                    <v-form-message v-model="$errors.message"/>
                    <div class="grid">
                        <div class="grid-item w-full">
                            <v-input
                                type="text"
                                name="email"
                                label="Email Address"
                                v-model="entity.email"
                                @change="$errors.forget('email')"
                                :invalid="$errors.has('email')"
                                :help="$errors.first('email', 'Enter your email.')">
                            </v-input>
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="password"
                                label="Password"
                                name="password"
                                v-model="entity.password"
                                @change="$errors.forget('password')"
                                :invalid="$errors.has('password')"
                                :help="$errors.first('password', 'Enter your secure password.')">
                            </v-input>
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="password"
                                label="Password Confirmation"
                                name="password_confirmation"
                                v-model="entity.password_confirmation"
                                @change="$errors.forget('password_confirmation')"
                                :invalid="$errors.has('password_confirmation')"
                                :help="$errors.first('password_confirmation', 'Confirm your secure password.')">
                            </v-input>
                        </div>
                    </div>
                </div>
                <div class="card-actions">
                    <v-action @click="submit(entity)" dusk="submit" class="btn btn-blue btn-lg">
                        Reset Password
                    </v-action>
                </div>
            </form>
        </div>
    </div>
</template>
