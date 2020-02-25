<script>
    import Input from "./Input"
    import rows from "./Props/Rows"
    export default {
        name: "InputTextarea",
        extends: Input,
        props:{rows},
    }
</script>
<template>
    <v-form-control
        :icon="icon"
        :name="name"
        :help="help"
        :label="label"
        :invalid="invalid">
        <textarea
            ref="input"
            class="input"
            :name="name"
            :rows="rows"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event.target.value)"
            :class="{invalid}"
            :disabled="disabled"
            :required="required"
            :placeholder="placeholder">
        </textarea>
    </v-form-control>
</template>
