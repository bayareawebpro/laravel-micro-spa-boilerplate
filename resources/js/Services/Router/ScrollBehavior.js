import VueScrollTo from "vue-scrollto"

export default (to, from, last) => {
    return new Promise((resolve) => {
        VueScrollTo.scrollTo("#header", 300, {
            offset: last ? last.y : 0,
            container: 'body',
            easing: "ease",
            onDone: resolve,
            force: false,
        })
    })
}
