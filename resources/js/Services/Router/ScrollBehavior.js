import VueScrollTo from "vue-scrollto"

export default (to, from, savedPosition) => {
    return new Promise((resolve) => {
        VueScrollTo.scrollTo("#header", 600, {
            offset: savedPosition ? savedPosition.y : 0,
            container: 'body',
            onDone: resolve
        })
    })
}
