export default {
    toggle() {
        this.$emit('input', this.value ? false : true)
    },
}
