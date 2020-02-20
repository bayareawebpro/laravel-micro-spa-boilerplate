<script>
    export default {
        name: 'Toasts',
        data: () => ({toasts: []}),
        computed: {
            limitedToasts() {
                return this.toasts.slice(0, 5)
            }
        },
        watch: {
            'toasts': {
                handler(toasts) {
                    this.isVisible = toasts.length
                }
            }
        },
        methods: {
            toast(data){
                this[data.type](data)
            },
            info({title, body}) {
                this.create({
                    icon: 'fa fa-info-circle',
                    class: 'alert info',
                    title,
                    body
                })
            },
            success({title, body}) {
                this.create({
                    icon: 'fa fa-check-circle',
                    class: 'alert success',
                    title,
                    body
                })
            },
            warn({title, body}) {
                this.create({
                    icon: 'fa fa-warning',
                    class: 'alert warn',
                    title,
                    body
                })
            },
            error({title, body}) {
                this.create({
                    icon: 'fa fa-exclamation-triangle',
                    class: 'alert error',
                    title,
                    body
                })
            },
            text({title, body}) {
                this.create({
                    icon: 'fa fa-info-circle',
                    class: 'alert',
                    title,
                    body
                })
            },
            create(params) {
                const toast = Object.assign({}, {
                    id: Math.random(),
                    timeout: 3000,
                    icon: 'fa fa-check-circle',
                    class: 'alert info',
                    title: 'Hello!',
                    body: 'World!',
                }, params)
                toast.expire = setTimeout(() => this.destroy(toast), 3000)
                this.toasts.unshift(toast)
            },
            destroy(toast){
                this.toasts.splice(this.toasts.findIndex((entry) => entry.id === toast.id), 1)
            }
        },
        created() {
            this.$options.$events = this.$app.make('Events')
            this.$options.$events.$on('toast:success', this.success)
            this.$options.$events.$on('toast:error', this.error)
            this.$options.$events.$on('toast:warn', this.warn)
            this.$options.$events.$on('toast:text', this.text)
            this.$options.$events.$on('toast:info', this.info)
        }
    }
</script>
<template>
    <div class="v-toasts">
        <transition-group name="v-toasts" tag="div">
            <div
                :key="toast.id"
                :class="toast.class"
                v-for="(toast) in limitedToasts"
                class="v-toasts-item block alert shadow-xl mb-3" role="alert">
                <div class="font-bold text-sm block">
                    <i v-if="toast.icon" :class="toast.icon"/>
                    {{ toast.title}}
                </div>
                <div class="v-toasts-body mt-2 text-xs block" v-if="toast.body">
                    {{ toast.body }}
                </div>
            </div>
        </transition-group>
    </div>
</template>
<style lang="sass" scoped>
    $width: 260px
    $transition: all 160ms ease-in-out
    .v-toasts
        transition: $transition
        position: fixed
        z-index: 10000 !important
        bottom: 50px
        right: 25px
        width: $width
        .v-toasts-item
            transition: $transition
        .v-toasts-body
            font-size: 13px
            max-width: $width
            word-break: break-all
            overflow: hidden
        .v-toasts-enter,
        .v-toasts-leave-to
            opacity: 0
        .v-toasts-enter
            transform: translate(15px, 0)
        .v-toasts-leave-active
            transform: scale(0)
            position: absolute
            bottom: 0
            right: 0
            left: 0
</style>
