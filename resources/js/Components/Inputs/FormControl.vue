<script>
    import invalid from './Props/Invalid'
    import label from './Props/Label'
    import help from './Props/Help'
    import icon from './Props/Icon'
    export default {
        name: "FormControl",
        props: {
            invalid,
            label,
            help,
            icon,
        }
    }
</script>
<template>
    <div class="control" :class="{icon: icon}">
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
