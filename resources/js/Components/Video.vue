<script>
    export default {
        props: {
            id: {
                type: String,
                default: () => null
            },
            image: {
                type: String,
                default: () => null
            },
            title: {
                type: String,
                default: () => 'Click to Watch Video'
            },
            subtitle: {
                type: String,
                default: () => 'Click to Play...'
            }
        },
        data: ()=> ({revealed: false}),
        computed: {
            styles() {
                return {
                    backgroundImage: this.image ? `url(${this.image})` : `url(https://i3.ytimg.com/vi/${this.id}/hqdefault.jpg)`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }
            },
        },
    }
</script>
<template>
    <figure style="cursor: pointer" @click.prevent="revealed = !revealed">
        <div class="iframe-container bg-black" :style="styles">
            <transition name="fadeInOut" mode="out-in">
                <iframe v-if="revealed" :src="`https://www.youtube.com/embed/${id}?autoplay=1`" allowfullscreen/>
                <div v-else>
                    <div class="h-full flex flex-col content-center justify-center text-center text-white">
                        <strong>{{ title }}</strong>
                        <svg
                            class="mx-auto h-full"
                            style="width: 20%; height: 20%"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 511.626 511.627">
                            <g>
                                <path class="text-blue-500" fill="currentColor" d="M511.339,212.987c-0.186-10.277-1-23.271-2.423-38.97c-1.431-15.708-3.478-29.746-6.14-42.115
                        c-3.046-13.893-9.661-25.6-19.842-35.117c-10.181-9.519-22.031-15.037-35.549-16.562c-42.258-4.755-106.115-7.135-191.573-7.135
                        c-85.459,0-149.317,2.38-191.572,7.135c-13.516,1.524-25.319,7.043-35.404,16.562c-10.089,9.514-16.656,21.221-19.702,35.117
                        c-2.852,12.373-4.996,26.41-6.423,42.115c-1.425,15.699-2.235,28.688-2.424,38.97C0.094,223.265,0,237.539,0,255.813
                        c0,18.272,0.094,32.55,0.288,42.826c0.189,10.284,0.999,23.271,2.424,38.969c1.427,15.707,3.474,29.745,6.139,42.116
                        c3.046,13.897,9.659,25.602,19.842,35.115c10.185,9.517,22.036,15.036,35.548,16.56c42.255,4.76,106.109,7.139,191.572,7.139
                        c85.466,0,149.315-2.379,191.573-7.139c13.518-1.523,25.316-7.043,35.405-16.56c10.089-9.514,16.652-21.225,19.698-35.115
                        c2.854-12.371,4.996-26.409,6.427-42.116c1.423-15.697,2.231-28.691,2.423-38.969c0.191-10.276,0.287-24.554,0.287-42.826
                        C511.626,237.539,511.531,223.265,511.339,212.987z M356.883,271.231L210.706,362.59c-2.666,1.903-5.905,2.854-9.71,2.854
                        c-2.853,0-5.803-0.764-8.848-2.286c-6.28-3.422-9.419-8.754-9.419-15.985V164.454c0-7.229,3.14-12.561,9.419-15.986
                        c6.473-3.431,12.657-3.239,18.558,0.571l146.178,91.36c5.708,3.23,8.562,8.372,8.562,15.415
                        C365.446,262.854,362.591,267.998,356.883,271.231z"
                                />
                            </g>
                        </svg>
                        <small>{{ subtitle }}</small>
                    </div>
                </div>
            </transition>
        </div>
    </figure>
</template>
<style lang="sass" scoped>
    .iframe-container
        position: relative
        overflow: hidden
        padding-top: 56.25%
    .iframe-container > div,
    .iframe-container iframe
        background-color: rgba(0,0,0,0.2)
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        border: 0
</style>
