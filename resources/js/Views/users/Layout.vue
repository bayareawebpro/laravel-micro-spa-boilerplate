<script>
    export default {
        name: "UsersLayout",
        props:['title', 'subtitle'],
    }
</script>
<template>
    <div class="flex flex-col h-full">
        <div class="bg-gray-800 py-3 px-6">
            <router-link :to="{name: 'users.index'}" class="page-title block">
                {{ title }}
            </router-link>
            <small class="page-lead">{{ subtitle }}</small>
        </div>
        <div class="layout p-4">
            <transition name="fadeInLeft" mode="out-in" :duration="90">
                <router-view :key="$route.name"/>
            </transition>
        </div>
    </div>
</template>
