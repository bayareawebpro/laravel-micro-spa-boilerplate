<script>
import Input from "./Input"
export default {
    name: "InputNumber",
    extends: Input,
}
</script>
<template>
    <v-form-control
        :icon="icon"
        :name="name"
        :help="help"
        :label="label"
        :invalid="invalid">
        <input
            ref="input"
            type="number"
            class="input"
            :class="{invalid}"
            :disabled="disabled"
            :required="required"
            :min="options.min || 0"
            :max="options.max || 9999"
            :step="options.step || 1"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event.target.value)"
        />
    </v-form-control>
</template>
