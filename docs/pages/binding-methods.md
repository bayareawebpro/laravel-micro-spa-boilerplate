# Vue Route Binding

### A) Route "uses" Controller Method

Before this example VueRoute is entered the Container will resolve `UserResource` 
and call the `index` method passing all the matched route params and query key / value pairs as single object. 

```javascript
Route
    .to('users.index','/users')
    .uses('MyController@myMethod')
```

## B) Controller Method

The controller method is called and the response is merged into the controllers `$state`.

> Errors must be returned to the caller to prevent the route from being entered.

```javascript
async myMethod(params){
    try{
        // Merge all attributes into the store state.
        const {data} = await this.$http.get('/api/my-route')
        await this.$state.update(data) 
    }catch (error) {
        //Return to caller and redirect to error page.
        return Promise.reject(this.handleError(error)) 
    }
}
```

## C) Component Page

The component will receive the updated state.

```vue
<script>
    export default {
        beforeCreate() {
            this.$bind.mapGetters('UserResource', {
                entries: 'entries',
            })
        },
    }
</script>
<template>
    <div v-if="entries">
        <div v-for="entry in entries">
            
        </div>
    </div>
</template>
```

