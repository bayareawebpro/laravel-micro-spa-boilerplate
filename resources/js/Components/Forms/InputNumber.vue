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
            class="input"
            :name="name"
            type="number"
            :min="options.min || 0"
            :max="options.max || 9999"
            :step="options.step || 1"
            v-model="state"
            :disabled="disabled"
            :required="required"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :class="{invalid, disabled,icon: icon}"
            @input="$emit('input', state)"
            @change="$emit('change', state)"
        />
    </v-form-control>
</template>
