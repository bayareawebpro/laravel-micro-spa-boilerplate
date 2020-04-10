# Links & Navigation

Controllers and Components can access the RouteLink Builder via the `$link` property.

```vue
<router-link 
    :to="$link('my.route')
    .withParams({id: entity.id})
    .withQuery({tab: entity.role})">
    My Route
</router-link>
```

Programmatically by resolving the Service from the Container. 

```javascript
this.app
    .make('Route')
    .link('my.route')
    .withQuery({...})
    .withParams({...})
    .withHash('myAnchor')
```

## Route.link

Returns a new link builder instance.

```javascript
Route.link('my.route')
```

## Route.withQuery

Apply a query parameters object to the link instance.

```javascript
Route
    .link('my.route')
    .withQuery({...})
```


## Route.withParams

Apply a named parameters object to the link instance.

```javascript
Route
    .link('my.route')
    .withParams({...})
```

## Route.withHash

Apply a hash anchor to the link instance.

```javascript
Route
    .link('my.route')
    .withHash('myAnchor')
```
