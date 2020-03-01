<script>
    import required from "./Props/Required"
    import disabled from './Props/Disabled'
    import invalid from './Props/Invalid'
    import options from "./Props/Options"
    import label from './Props/Label'
    import value from "./Props/Value"
    import help from './Props/Help'
    import type from './Props/Type'
    import name from './Props/Name'
    import icon from './Props/Icon'
    import focus from "./Methods/Focus"
    import click from "./Methods/Click"
    export default {
        name: "InputRadio",
        data: ()=>({state: null}),
        watch:{
            value:{
                immediate:true,
                handler(newVal){
                    this.state = newVal
                }
            }
        },
        props: {
            disabled,
            required,
            invalid,
            options,
            value,
            label,
            name,
            help,
            type,
            icon,
        },
        methods: {
            ...focus,
            ...click,
        }
    }
</script>
<template>
    <v-form-control
        :name="name"
        :help="help"
        :label="label"
        :invalid="invalid">
            <template v-if="icon" v-slot:label:before>
                <i class="fa" :class="icon"/>
            </template>
            <input
                ref="input"
                class="input"
                :id="name"
                :name="name"
                type="radio"
                :disabled="disabled"
                :required="required"
                :class="{invalid, disabled}"
                :checked="state === options.value"
                @input="$emit('input', options.value)"
                @change="$emit('change', options.value)"
            >
    </v-form-control>
</template>
