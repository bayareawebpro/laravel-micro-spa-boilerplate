<script>
    import Input from "./Input"
    export default {
        name: "InputTextarea",
        extends: Input,
    }
</script>
<template>
    <v-form-control
        :icon="icon"
        :help="help"
        :label="label"
        :invalid="invalid">
        <textarea
            ref="input"
            class="input"
            :name="name"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event.target.value)"
            :class="{invalid}"
            :disabled="disabled"
            :required="required"
            :placeholder="placeholder">
        </textarea>
    </v-form-control>
</template>
