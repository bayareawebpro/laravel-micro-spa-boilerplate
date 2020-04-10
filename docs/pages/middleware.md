# Middleware

> /resources/js/Middleware

The `Middleware` directory contains auto-loaded classes that can be applied to routes. 

## Router Pipes

Basic pipes must be implemented per-route:

```javascript
Route
    .to('users.index','/users')
    .middleware('auth')
```

**Middleware Pipe Source:**

[Auth.js](https://raw.githubusercontent.com/bayareawebpro/laravel-micro-spa-boilerplate/master/resources/js/Middleware/Auth.js ':include :type=code')

## Global Pipes

This MetaData Pipe is pre-configured for global route usage by returning `true` from `global` static getter.

**Global Middleware Pipe Source:**

[MetaData.js](https://raw.githubusercontent.com/bayareawebpro/laravel-micro-spa-boilerplate/master/resources/js/Middleware/MetaData.js ':include :type=code')
