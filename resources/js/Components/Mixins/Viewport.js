export default {
    data(){
        return {
            viewport: {}
        }
    },
    beforeCreate() {
        this.$options.syncViewPort = ()=>(this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
            isSmall: window.innerWidth <= 640,
            isMedium: window.innerWidth >= 768,
            isLarge: window.innerWidth >= 1024,
            isXL: window.innerWidth >= 1280,
        })
    },
    created() {
        this.$options.syncViewPort()
        window.addEventListener('resize', this.$options.syncViewPort)
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.$options.syncViewPort)
    }
}
