<script>
    import Viewport from "./Mixins/Viewport"
    export default {
        name: "Sidebar",
        mixins:[Viewport],
        props:{
            value: {
                type: Boolean,
                default: ()=>false,
            },
        },
        watch:{
            $route:{
                handler(){
                    if(this.viewport.isSmall || this.viewport.isMedium){
                        this.$emit('input', false)
                    }
                }
            }
        },
    }
</script>
<template>
    <transition name="fadeInLeft">
        <aside v-if="value" class="sidebar">
            <div class="sidebar-content">
                <slot/>
            </div>
        </aside>
    </transition>
</template>
