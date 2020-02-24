<script>
    import Input from "./Input"
    import multiple from './Props/Multiple'
    export default {
        name: "InputSelect",
        extends: Input,
        props:{multiple},
        methods:{
            onChange(){
                this.$emit('input', this.state)
                this.$nextTick(()=>this.$emit('change', this.state))
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
        <select
            ref="input"
            class="input"
            :name="name"
            v-model="state"
            @change="onChange"
            :disabled="disabled"
            :required="required"
            :multiple="multiple"
            :class="{invalid, disabled}">
            <option v-for="option in options" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </v-form-control>
</template>
