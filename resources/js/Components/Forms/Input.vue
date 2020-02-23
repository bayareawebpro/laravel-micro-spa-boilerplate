<script>
    import placeholder from './Props/Placeholder'
    import autocomplete from "./Props/AutoComplete"
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
    import select from "./Methods/Select"
    export default {
        name: "Input",
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
            autocomplete,
            placeholder,
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
            ...select,
            ...focus,
        }
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
                type="text"
                class="input"
                :name="name"
                :type="type"
                v-model="state"
                :disabled="disabled"
                :required="required"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :class="{invalid, disabled,icon: icon}"
                @input="$emit('input', state)"
            >
    </v-form-control>
</template>
