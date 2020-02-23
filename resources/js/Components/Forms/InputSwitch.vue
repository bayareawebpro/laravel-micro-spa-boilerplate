<script>
    import Input from "./Input"

    export default {
        name: "InputSwitch",
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
        <div
            class="switch"
            :class="{invalid, disabled}"
            @click="$refs.input.click()">
            <span class="switch-well">
               <input
                   ref="input"
                   :id="name"
                   :name="name"
                   type="checkbox"
                   :value="value"
                   :disabled="disabled"
                   :required="required"
                   @input="$emit('input', !value)"
                   @change="$emit('change', !value)"
               />
               <span tabindex="0" class="slider"
                     @keydown.enter.capture.prevent.stop="$refs.input.click()"
                     @keydown.space.capture.prevent.stop="$refs.input.click()"
                     @keydown.right.capture.prevent.stop="$refs.input.click()"
                     @keydown.left.capture.prevent.stop="$refs.input.click()"
               />
            </span>
            <label class="label" :for="name">
                <slot></slot>
            </label>
        </div>
    </v-form-control>
</template>
