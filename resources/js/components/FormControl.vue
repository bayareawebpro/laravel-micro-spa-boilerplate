<script>
    /**
     * @property validator
     **/
    export default {
        name: "FormControl",
        props: {
            value: {
                required: false,
                default: () => ''
            },
            type: {
                type: String,
            },
            name: {
                type: String,
                default: () => 'input',
            },
            label: {
                type: String,
            },
            help: {
                type: String,
            },
            placeholder: {
                type: String,
            },
            invalid: {
                type: Boolean,
                default: () => false,
            },
            required: {
                type: Boolean,
                default: () => false,
            },
            disabled: {
                type: Boolean,
                default: () => false,
            },
            multiple: {
                type: Boolean,
                default: () => false
            },
            options: {
                type: [Array, Object],
                default: () => [],
            },
        },
        computed: {
            field: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                    this.$emit('change')
                }
            },
            fileTypes() {
                return (this.options.accept || []).join(',')
            }
        },
        methods: {
            clipboard(){
                this.$refs.input.focus();
                this.$refs.input.select();
                document.execCommand('copy');
            },
            toggle() {
                this.field = !this.field
            },
            update(value) {
                this.field = value
            },
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
        },
        watch: {
            options: {
                deep: true,
                immediate: true,
                handler(newVal) {
                    if (!this.field && Array.isArray(newVal) && newVal.length === 1) {
                        this.field = newVal[0].value
                    }
                }
            }
        }
    }
</script>
<template>
    <div class="element">

        <!-- TextArea -->
        <template v-if="type === 'textarea'">
            <label :for="name" class="label">{{ label }}</label>
            <textarea
                ref="input"
                class="input"
                :name="name"
                v-model="field"
                :class="{invalid}"
                :disabled="disabled"
                :required="required"
                :placeholder="placeholder">
            </textarea>
        </template>
        <!-- TextArea -->

        <!-- Switch -->
        <template v-else-if="type === 'switch'">
            <label class="switch mt-2" :for="name">
                <span class="switch-well">
                   <input
                       ref="input"
                       :id="name"
                       :name="name"
                       type="checkbox"
                       :disabled="disabled"
                       :required="required"
                       v-model="field">
                   <span tabindex="0" class="slider"
                         @keydown.enter.capture.prevent.stop="toggle"
                         @keydown.space.capture.prevent.stop="toggle"
                         @keydown.right.capture.prevent.stop="update(true)"
                         @keydown.left.capture.prevent.stop="update(false)"
                   />
                </span>
                <span class="label">{{ label }}</span>
            </label>
        </template>
        <!-- Switch -->

        <!-- Select -->
        <template v-else-if="type === 'select'">
            <label :for="name" class="label">{{ label }}</label>
            <select
                ref="input"
                :type="type"
                :name="name"
                class="input"
                v-model="field"
                :class="{invalid}"
                :disabled="disabled"
                :required="required"
                :placeholder="placeholder"
                :multiple="false">
                <slot :options="options">
                    <option v-for="option in options" :value="`${option.value}`">
                        {{option.label}}
                    </option>
                </slot>
            </select>
        </template>
        <!-- Select -->

        <!-- File -->
        <template v-else-if="type === 'file'">
            <label :for="name" class="label">{{ label }}</label>
            <transition name="fadeInRight" mode="out-in">
                <div v-if="field">
                    <img v-if="field.preview" :src="field.preview" class="rounded border-gray-900 my-2 w-auto"/>
                    <p class="text-sm">{{ field.name }}</p>
                </div>
            </transition>
            <slot :action="()=>$refs.input.click()">
                <v-action @click="$refs.input.click()">
                    Select
                </v-action>
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
        </template>
        <!-- File -->

        <!-- Number -->
        <template v-else-if="type === 'number'">
            <label :for="name" class="label">{{ label }}</label>
            <input
                ref="input"
                :type="type"
                :name="name"
                class="input"
                v-model="field"
                :class="{invalid}"
                :disabled="disabled"
                :required="required"
                :multiple="multiple"
                :placeholder="placeholder"
                :min="options.min || 0"
                :max="options.max || 9999"
                :step="options.step || 1"
            />
        </template>
        <!-- Number -->

        <!-- Other -->
        <template v-else>
            <label :for="name" class="label">{{ label }}</label>
            <input
                ref="input"
                :type="type"
                :name="name"
                class="input"
                v-model="field"
                :class="{invalid}"
                :disabled="disabled"
                :required="required"
                :multiple="multiple"
                :placeholder="placeholder"
            />
        </template>
        <!-- Other -->

        <!-- Helper -->
        <p v-if="help" class="help" :class="{invalid: invalid}">
            {{ help }}
        </p>
        <!-- Helper -->
    </div>
</template>
