<script>
    export default {
        name: "Home",
        data: () => ({}),
    }
</script>
<template>
    <div class="m-0 p-0 h-full text-center bg-gray-900">
        <v-animated name="zoomInOut" :delay="10">
            <section class="bg-gray-1000 shadow-xl shadow-inner p-6">
                <div class="grid flex-col justify-center content-center">
                    <div class="grid-item">
                        <img src="/images/logo.svg" style="width: 256px" class="mx-auto">
                        <h1 class="brand text-xl">
                            <span>Laravel</span><em>Micro</em><small>.js</small>
                        </h1>
                        <p class="text-gray-600">Advanced Single Page Application Boilerplate</p>
                        <p></p>
                    </div>
                </div>
            </section>
        </v-animated>

        <section class="p-8 text-center">
            <div class="grid justify-center">
                <div class="grid-item md:w-1/2 mb-12">
                    <v-animated name="fadeInUp" :delay="180">
                        <div>
                            <img src="/images/gem.svg" style="width: 64px" class="mx-auto mb-3">
                            <h4>IOC Container</h4>
                            <p class="text-sm">
                                Advanced Laravel-style object-oriented dependency injection with Container and Service Providers.
                                Extendable controllers and an easy-to-use Reactive Store System.
                            </p>
                        </div>
                    </v-animated>
                </div>
                <div class="grid-item md:w-1/2 mb-12">
                    <v-animated name="fadeInUp" :delay="260">
                        <div>
                            <img src="/images/process.svg" style="width: 64px" class="mx-auto mb-3">
                            <h4>Middleware Pipeline</h4>
                            <p class="text-sm">
                                The LaravelMicro Middleware Pipeline adapted for VueRouter provides a dependable front-end request
                                lifecycle. Clean and easy to read Laravel-style middleware classes can be applied to Vue
                                Routes for interacting with application services.
                            </p>
                        </div>
                    </v-animated>
                </div>
                <div class="grid-item md:w-1/2 mb-12">
                    <v-animated name="fadeInUp" :delay="340">
                        <div>
                            <img src="/images/interpolate.svg" style="width: 64px" class="mx-auto mb-3">
                            <h4>API Controller Sync</h4>
                            <p class="text-sm">
                                Easily specify @ controller actions that should be called to synchronize
                                back-end api routes as users navigate front-end Vue routes. Validation
                                and server errors are captured by pre-configured services.
                            </p>
                        </div>
                    </v-animated>
                </div>
                <div class="grid-item md:w-1/2 mb-12">
                    <v-animated name="fadeInUp" :delay="430">
                        <div>
                            <img src="/images/numbers.svg" style="width: 64px" class="mx-auto mb-3">
                            <h4>Custom Component Library</h4>
                            <p class="text-sm">
                                Over 40 different custom designed UI Components built with Vue.js & Tailwind CSS ready for rapid prototyping.
                                Including Forms, Charts, Panels, Modals and more.
                            </p>
                        </div>
                    </v-animated>
                </div>
                <div  class="grid-item md:w-1/2 mb-12">
                    <v-animated name="fadeInUp" :delay="520">
                        <div>
                            <img src="/images/script.svg" style="width: 64px" class="mx-auto mb-3">
                            <h4>API Driven Development</h4>
                            <p class="text-sm">
                                API & SPA Authentication with Laravel Sanctum.
                                Scaffolding for Account and API Token management allows simple out-of-the-box usage.
                            </p>
                        </div>
                    </v-animated>
                </div>
                <div  class="grid-item md:w-1/2 mb-12">
                    <v-animated name="fadeInUp" :delay="610">
                        <div>
                            <img src="/images/compile.svg" style="width: 64px" class="mx-auto mb-3">
                            <h4>Rapid Resources</h4>
                            <p class="text-sm">
                                Bulletproof Resources with "Searchable Resource Builder" Package,
                                and pre-written Frontend Controllers and UI Scaffolding.
                            </p>
                        </div>
                    </v-animated>
                </div>
                <div  class="grid-item md:w-1/2 mb-12">
                    <v-animated name="fadeInUp" :delay="700">
                        <div>
                            <img src="/images/request.svg" style="width: 64px" class="mx-auto mb-3">
                            <h4>100% Page Speed Performance</h4>
                            <p class="text-sm">
                                PWA Manifest and Service Worker ready to cache routes and assets from the Laravel Mix Manifest.
                            </p>
                        </div>
                    </v-animated>
                </div>
            </div>
        </section>
    </div>
</template>
