<script>
    import Input from "./Input"
    import Options from "./Props/Options"
    export default {
        name: "InputFile",
        extends: Input,
        props:{
            Options,
        },
        computed:{
            fileTypes() {
                return (this.options.accept || []).join(',')
            }
        },
        methods:{
            create(file) {
                this.state = null
                this.$app
                    .make('Attachments')
                    .upload({file})
                    .then(({data})=>{
                        this.state = data.file
                        this.$emit('input', this.state)
                        this.$emit('change', this.state)
                    })
            },
            destroy(file) {
                this.$app
                    .make('Attachments')
                    .destroy(file)
                    .then(()=>{
                        this.state = null
                        this.$emit('input', this.state)
                        this.$emit('change', this.state)
                    })
            }
        }
    }
</script>
<template>
    <v-form-control
        :name="name"
        :help="help"
        :label="label"
        :invalid="invalid">
        <transition name="fadeInRight" mode="out-in">
            <div v-if="state">
                <div class="inline-block relative">
                    <v-action @click="destroy(state)" class="btn-red absolute top-0 right-0 mr-2 mt-2">
                        <v-svg-close />
                    </v-action>
                    <img
                        v-if="state.url"
                        :src="state.url"
                        class="rounded shadow border-gray-900 w-auto"
                    />
                </div>
            </div>
        </transition>
        <slot :action="()=>$refs.input.click()">
            <button
                type="button"
                class="btn btn-primary"
                @click.prevent="$refs.input.click()">
                Select
            </button>
        </slot>
        <input
            ref="input"
            type="file"
            :name="name"
            :class="{invalid}"
            :disabled="disabled"
            :required="required"
            :accept="fileTypes"
            class="input hidden"
            @input="(e)=>create(e.target.files[0])"
            :placeholder="`${placeholder} ${fileTypes}`"
        />
    </v-form-control>
</template>
