<script>
    import Input from "./Input"
    import multiple from './Props/Multiple'
    export default {
        name: "InputSelect",
        extends: Input,
        props:{multiple}
    }
</script>
<template>
    <v-form-control
        :icon="icon"
        :help="help"
        :label="label"
        :invalid="invalid">
        <select
            ref="input"
            class="input"
            :name="name"
            v-model="state"
            :disabled="disabled"
            :required="required"
            :multiple="multiple"
            @change="$emit('input', state)"
            :class="{invalid, disabled}">
            <option v-for="option in options" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </v-form-control>
</template>
