<script>
    export default {
        name: "Test",
        data: ()=>({

        }),
    }
</script>
<template>
    <div class="layout p-4">
        <div class="card">
            <div class="card-header bg-gray-800">
                Card
            </div>
            <div class="card-content bg-gray-900">
                <br><router-link class="btn" :to="{name: 'errors.test', params: {status: 401}}">401 UnAuthenticated</router-link>
                <br><router-link class="btn" :to="{name: 'errors.test', params: {status: 403}}">403 UnAuthorized</router-link>
                <br><router-link class="btn" :to="{name: 'errors.test', params: {status: 403}}">403 UnAuthorized</router-link>
                <br><router-link class="btn" :to="{name: 'errors.test', params: {status: 404}}">404 Not Found</router-link>
                <br><router-link class="btn" :to="{name: 'errors.test', params: {status: 419}}">419 Session Expired</router-link>
                <br><router-link class="btn" :to="{name: 'errors.test', params: {status: 422}}">422 Invalid</router-link>
                <br><router-link class="btn" :to="{name: 'errors.test', params: {status: 500}}">500 ServerError</router-link>
            </div>
        </div>
    </div>
</template>
