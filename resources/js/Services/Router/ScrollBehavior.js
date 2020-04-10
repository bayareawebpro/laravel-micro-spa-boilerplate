import VueScrollTo from "vue-scrollto"

export default (to, from, last) => {
    return new Promise((resolve) => {
        VueScrollTo.scrollTo(window.document.body, 120, {
            onDone: resolve({y: 0}),
            container: 'html',
            easing: "ease",
            force: false,
            offset: 0,
            x: false,
            y: true
        })
    })
}
