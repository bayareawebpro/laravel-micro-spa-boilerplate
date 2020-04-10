# Vue Bindings 

> /resources/js/Services/Vue/AutoBinder.js

The AutoBinder service is how controllers and services are injected into components.

## Global Vue Property

The `$app` instance is available in every Vue instance.

```javascript
console.log(this.$app)
console.log(this.$app.make('MyController'))
```

## Before Create Hook

The `$bind` factory is available in every Vue instance and can only be used before the 
vue instance is created. The following methods will extend the Vue instance by mapping 
a controller or service from the container.

```javascript
beforeCreate() {
    this.$bind.mapActions('MyController', {
        //
    })
    this.$bind.mapState('MyController', {
        //
    })
    this.$bind.mapGetters('MyController', {
        //
    })
    this.$bind.mapWatchers('MyController', {
        //
    })
}
```

### Map Getters

> Controller Instance must have a `$store` / `Repository` root instance. Or implement `get` / `set` methods,
> see Controllers for more details.

```javascript
beforeCreate(){
    this.$bind.mapGetters('MyController', {
        prop: 'my.nested.prop', //
    })
},
created(){
    this.prop = true
}
```


### Map Actions

```javascript
beforeCreate(){
    this.$bind.mapActions('MyController', {
        method: 'myMethod', //
    })
},
created(){
    this.method()
}
```

### Map State

```javascript
beforeCreate(){
    this.$bind.mapState('MyController', {
        $service: '$injectedService',  
    })
    
    // Same as: 
    this.$bind.mapState('MyController', {
        $service: (MyController)=>MyController.$service, 
    })
},
created(){
    this.$service.doSomething()
}
```

### Map Watchers

```javascript
beforeCreate(){
    this.$bind.mapWatchers('MyController', {
        '$route.query': {
            immediate: true,
            handler: 'index'
        },
    })
}
```
