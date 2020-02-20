<script>
    export default {
        name: "FormMessage",
        props:{
            value:{
                required:false,
                default: ()=>true
            },
            type:{
                required:false,
                default: ()=>''
            },
            dismissible:{
                required:false,
                default: ()=>true
            }
        }
    }
</script>
<template>
        <transition name="fadeInRight">
        <div v-if="value" class="alert flex mb-4" :class="type">
            <strong class="flex-grow"><slot>{{ value }}</slot></strong>
            <div v-if="dismissible" class="text-white cursor-pointer float-right self-center" @click.prevent="$emit('input', null)">
                <svg fill="currentColor" height="16" width="16" viewBox="0 0 41.756 41.756" xmlns="http://www.w3.org/2000/svg">
                    <path d="m27.948 20.878 12.343-12.342c1.953-1.953 1.953-5.119 0-7.071-1.951-1.952-5.119-1.952-7.07 0l-12.343 12.344-12.343-12.344c-1.951-1.952-5.119-1.952-7.07 0-1.953 1.953-1.953 5.119 0 7.071l12.342 12.342-12.342 12.342c-1.953 1.953-1.953 5.119 0 7.071.975.977 2.256 1.464 3.535 1.464 1.278 0 2.56-.487 3.535-1.464l12.343-12.342 12.343 12.343c.976.977 2.256 1.464 3.535 1.464s2.56-.487 3.535-1.464c1.953-1.953 1.953-5.119 0-7.071z"/>
                </svg>
            </div>
        </div>
    </transition>
</template>
