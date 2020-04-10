# Routes

```javascript
Route
    .to('auth.account','/account/edit')
    .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Account"))
    .uses('Auth@authorize')
    .middleware('auth')
```

## Route.group

Route groups need to specify the root path, layout view and child array.

```javascript
Route.group('/path',()=>import(/*webpackChunkName:"my-chunk"*/ "@views/my/Layout"), [
    Route
        .to('my.route','/path/nested')
        .view(()=>import(/*webpackChunkName:"my-chunk"*/ "@views/my/Comp"))
        .middleware('mypipe'),
    Route
        .to('my.route','/path/nested')
        .view(()=>import(/*webpackChunkName:"my-chunk"*/ "@views/my/Comp"))
        .middleware('mypipe'),
])
```

## Route.to

Routes that specify views should also specify the name and path.

```javascript
Route.to('auth.account','/account/edit')
```

## Route.uses

Routes that use a `Controller@method` **will not** be entered _or_ updated until the promise returned from 
the controller is resolved. Updating the VueRouter query or params will call the controller action again.

If an error is returned from the rejected promise VueRouter will redirect to the the error page.
If a validation error is returned the error will be ignored.

```javascript
Route.uses('Auth@authorize')
```


## Route.middleware

Routes that use `middleware` **will not** be entered until all middleware pipes have completed.

```javascript
Route.middleware('auth', 'analytics') // Lowercase Class name
```

## Route.view

Routes will typically specify a view component to load from `@views` directory alias.

```javascript
Route.view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Account"))
```
