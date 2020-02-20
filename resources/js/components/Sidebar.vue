<script>
    export default {
        name: "Sidebar",
        props:{
            value: {
                type: Boolean,
                default: ()=>false,
            },
            pinned: {
                type: Boolean,
                default: ()=>false,
            },
            side: {
                type: String,
                default: ()=>'left',
            },
            event: {
                type: String,
                default: ()=>'sidebar',
            },
        },
        computed:{
            transition(){
                return this.side === 'right' ? 'fadeInRight' : 'fadeInLeft'
            },
            classes(){
                if(this.pinned){
                    return `pinned-${this.side}`
                }
            }
        },
    }
</script>
<template>
    <transition :name="transition">
        <aside v-if="value" class="sidebar" :class="classes">
            <div class="sidebar-content">
                <slot/>
            </div>
        </aside>
    </transition>
</template>
