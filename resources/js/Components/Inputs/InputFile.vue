<script>
    import Input from "./Input"
    import Options from "./Props/Options"
    export default {
        name: "InputFile",
        extends: Input,
        props:{
            Options
        },
        computed:{
            fileTypes() {
                return (this.options.accept || []).join(',')
            }
        },
        methods:{
            readFile(file) {
                const resolved = new Promise((resolve)=>{
                    const result = {file: file, type: file.type, name: file.name, preview: null}
                    if (file.type.match('image/*')) {
                        const reader = new FileReader;
                        reader.onload = (event) => {
                            result.preview =event.target.result
                            resolve(result)
                        }
                        reader.readAsDataURL(file)
                    } else {
                        resolve(result)
                    }
                })
                resolved.then((result)=>this.field = result)
            }
        }
    }
</script>
<template>
    <div>
        <transition name="fadeInRight" mode="out-in">
            <div v-if="value">
                <img
                    v-if="value.preview"
                    :src="value.preview"
                    class="rounded border-gray-900 my-2 w-auto"
                />
                <p class="text-sm">{{ value.name }}</p>
            </div>
        </transition>
        <slot :action="()=>$refs.input.click()">
            <button type="button" class="btn btn-primary" @click.prevent="$refs.input.click()">
                Select
            </button>
        </slot>
        <input
            ref="input"
            :type="type"
            :name="name"
            :class="{invalid}"
            :disabled="disabled"
            :required="required"
            :accept="fileTypes"
            class="input hidden"
            @input="(e)=>readFile(e.target.files[0])"
            :placeholder="`${placeholder} ${fileTypes}`"
        />
    </div>
</template>
