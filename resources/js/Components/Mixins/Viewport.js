export default {
    data(){
        return {
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                isSmall: window.innerWidth <= 640,
                isMedium: window.innerWidth <= 768,
                isLarge: window.innerWidth >= 1024,
                isXL: window.innerWidth >= 1280,
            }
        }
    },
    methods:{
        syncViewPort(){
            this.viewport = {
                width: window.innerWidth,
                height: window.innerHeight,
                isSmall: window.innerWidth <= 640,
                isMedium: window.innerWidth <= 768,
                isLarge: window.innerWidth >= 1024,
                isXL: window.innerWidth >= 1280,
            }
        }
    },
    created() {
        window.addEventListener('resize', this.syncViewPort)
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.syncViewPort)
    }
}
