<script>
    import placeholder from './Props/Placeholder'
    import autocomplete from "./Props/AutoComplete"
    import required from "./Props/Required"
    import disabled from './Props/Disabled'
    import relation from './Props/Relation'
    import invalid from './Props/Invalid'
    import options from "./Props/Options"
    import focus from "./Methods/Focus"
    import label from './Props/Label'
    import value from "./Props/Value"
    import help from './Props/Help'
    import name from './Props/Name'
    import icon from './Props/Icon'
    export default {
        name: "InputFile",
        props: {
            autocomplete,
            placeholder,
            disabled,
            relation,
            required,
            invalid,
            options,
            value,
            label,
            name,
            help,
            icon,
            autoOpen: {
                type: Boolean,
                default: () => false
            }
        },
        data: () => ({
            loading: false,
            state: null,
            error: null,
        }),
        watch: {
            value: {
                immediate: true,
                handler(newVal) {
                    this.state = newVal
                }
            }
        },
        computed: {
            fileTypes() {
                return (this.options.accept || []).join(',')
            },
            isImage() {
                return (this.state && this.state.mime && this.state.mime.match('image/*'))
            },
            isVideo() {
                return (this.state && this.state.mime && this.state.mime.match('video/*'))
            }
        },
        methods: {
            ...focus,
            reset() {
                this.state = null
                this.error = null
                this.$emit('input', null)
                this.$emit('change', null)
            },
            onError(error) {
                this.reset();
                this.$emit('error', error);
                if(
                    error.response &&
                    error.response.data &&
                    error.response.data.errors &&
                    error.response.data.errors.file){
                    this.error = error.response.data.errors.file[0]
                }
            },
            create(file) {
                this.error = null
                this.state = null
                this.loading = true
                this.$app
                    .make('Http')
                    .upload(`/api/attachments`, {file})
                    .then(({data}) => {
                        this.state = data.entity
                        this.$emit('input', this.state)
                        this.$emit('change', this.state)
                    })
                    .catch(this.onError)
                    .finally(() => this.loading = false)
            },
            destroy() {
                this.loading = true
                this.$app
                    .make('Http')
                    .delete(`/api/attachments/${this.state.id}`)
                    .then(this.reset)
                    .then(() => this.$emit('destroyed', null))
                    .catch(this.onError)
                    .finally(() => this.loading = false)
            }
        },
        mounted() {
            if (this.autoOpen && this.$refs.file) {
                this.$refs.file.click()
            }
        }
    }
</script>
<template>

    <transition name="fadeInOut" mode="out-in">
        <div v-if="state && state.id">
            <div class="grid">
                <div v-if="isImage" class="grid-item flex-shrink sm:w-1/4">
                    <img :src="state.url"
                         class="rounded shadow border-gray-900 w-full"
                    />
                </div>
                <div v-else-if="isVideo"  class="grid-item flex-shrink sm:w-1/4 bg-black">
                    <video width="320" height="240" controls class="w-full">
                        <source :src="state.url" :type="state.mime">
                    </video>
                </div>
                <div class="grid-item flex-grow text-sm">
                    <div class="">
                        {{ state.name }}
                    </div>
                    <div>{{ state.mime }}</div>
                    <div>{{ state.size / 1000 }} Kb</div>
                </div>
                <div class="grid-item flex-shrink">
                    <div>
                        <v-action @click="destroy" class="btn-red btn-sm self-center">
                            <div>
                                <i class="fa fa-trash"></i>
                                Destroy
                            </div>
                        </v-action>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <v-form-control
                :name="name"
                :label="label"
                :invalid="invalid || error"
                :help="error || `${help} ${fileTypes}`">
                <input
                    ref="file"
                    type="file"
                    :name="name"
                    :accept="fileTypes"
                    class="input hidden"
                    @input="(e)=>create(e.target.files[0])"
                />
                <v-action
                    ref="input"
                    :class="{invalid}"
                    :disabled="disabled"
                    :required="required"
                    :loading="loading"
                    class="btn btn-blue"
                    @click.prevent="$refs.file.click()">
                    <i class="fa fa-upload"></i> Upload
                </v-action>
            </v-form-control>
        </div>
    </transition>
</template>
