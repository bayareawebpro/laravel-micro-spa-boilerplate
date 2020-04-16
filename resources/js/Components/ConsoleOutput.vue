<script>
    export default {
        name: "Command",
        props: {
            value: {
                type: Array,
                default: ()=>[]
            },
            height: {
                type: Number,
                default: ()=>500
            }
        },
        watch:{
            value:{
                immediate: true,
                handler(){
                    this.$nextTick(()=>{
                        if (this.$refs.console) {
                            this.$refs.console.scrollTop = this.$refs.console.scrollHeight
                        }
                    })
                }
            }
        },
    }
</script>
<template>
    <div
        ref="console"
        :style="{maxHeight: `${height}px`}"
        class="console">
        <pre v-for="line in value"><code>{{ line }}</code></pre>
        <div class="mt-1"></div>
    </div>
</template>
