<script>
    import invalid from './Props/Invalid'
    import label from './Props/Label'
    import help from './Props/Help'
    import icon from './Props/Icon'
    import name from './Props/Name'
    export default {
        name: "FormControl",
        props: {
            invalid,
            label,
            help,
            icon,
            name,
        }
    }
</script>
<template>
    <div class="element" :class="{icon: icon}">
        <label v-if="label" :for="name" class="label">
            {{ label }}
        </label>
        <div class="relative">
            <slot></slot>
            <i v-if="icon" class="fa" :class="icon"/>
        </div>
        <p v-if="help" class="help" :class="{invalid: invalid}">
            {{ help }}
        </p>
    </div>
</template>
