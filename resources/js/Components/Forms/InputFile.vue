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
            },
            uploadable: {
                type: Boolean,
                default: () => false
            },
            destroyable: {
                type: Boolean,
                default: () => false
            },
            endpoint: {
                type: String,
                default: () => '/api/attachments'
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
                return (this.state && this.state.mime.includes('image'))
            },
            isVideo() {
                return (this.state && this.state.mime.includes('video'))
            },
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
            readFile(file){
                if(file.type.includes('image')){
                    const reader = new FileReader
                    reader.onload = e => {
                        this.state.url = e.target.result
                        this.$emit('input', this.state)
                        this.$emit('change', this.state)
                    }
                    reader.readAsDataURL(file)
                }
            },
            create(file) {
                this.error = null
                this.state = {
                    name: file.name,
                    mime: file.type,
                    size: file.size,
                    url: null,
                }
                if(!this.uploadable){
                    return this.readFile(file)
                }
                this.loading = true
                this.$app
                    .make('Http')
                    .upload(`${this.endpoint}`, {file})
                    .then(({data}) => {
                        this.state = data.entity
                        this.$emit('input', this.state)
                        this.$emit('change', this.state)
                    })
                    .catch(this.onError)
                    .finally(() => this.loading = false)
            },
            destroy() {
                if(!this.destroyable){
                    return this.state = null
                }
                this.loading = true
                this.$app
                    .make('Http')
                    .delete(`${this.endpoint}/${this.state.id}`)
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
    <transition name="zoomInOut" mode="out-in">
        <div v-if="state">
            <div v-if="isImage || isVideo">
                <slot name="preview:media">
                    <div class="card">
                        <div class="card-header text-xs">
                            {{ state.name }}
                        </div>
                        <div class="card-content rounded-t-none p-0">
                            <img v-if="isImage" :src="state.url" class="w-auto max-w-full"/>
                            <video v-else width="320" height="240" controls class="w-full">
                                <source :src="state.url" :type="state.mime">
                            </video>
                        </div>
                        <div class="card-actions flex">
                            <div>{{ state.mime }} | {{ state.size | bytesForHumans }}</div>
                            <v-action @click="destroy" class="btn-red btn-sm self-center ml-auto">
                                <i class="fa fa-trash"></i>
                                <div class="hidden md:inline">Remove</div>
                            </v-action>
                        </div>
                    </div>
                </slot>
            </div>
            <div v-else>
                <slot name="preview:files">
                    <div class="grid">
                        <div class="grid-item flex-grow text-sm">
                            <div class="font-bold">{{ state.name }}</div>
                            <div>{{ state.mime }}</div>
                            <div>{{ state.size | bytesForHumans }} Kb</div>
                        </div>
                        <div class="grid-item flex-shrink">
                            <div>
                                <v-action @click="destroy" class="btn-red btn-sm self-center">
                                    <i class="fa fa-trash"></i>
                                    <div class="hidden md:inline">Remove</div>
                                </v-action>
                            </div>
                        </div>
                    </div>
                </slot>
            </div>
        </div>
        <div v-else>
            <v-form-control
                :name="name"
                :label="label"
                :invalid="invalid || error"
                :help="error || `${help} ${fileTypes}`">
                <template v-if="icon" v-slot:label:before>
                    <i class="fa" :class="icon"/>
                </template>
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
