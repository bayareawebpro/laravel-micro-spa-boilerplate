# Worker

> /resources/js/worker.js

The Service Worker service is designed to 
allow the client to dispatch data to be processes by the Service Worker.

> Worker is a WIP, please contribute. 

## Installing the Worker

> /resources/js/bootstrap.js

```javascript
VueRoot.$nextTick(()=>{
    App.make('Worker').then((worker) => {
        worker.install().then(()=>{
           //Dispatch
        })
    })
})
```

## Dispatch to Worker

Once the worker is installed you can dispatch a task to the worker.

```javascript
App.make('Worker').dispatch({command: 'commandA', data: {
    test:123
}})
.then((data)=>{
    console.log('WorkerResult', data)
})
```


## Worker Route Caching

```javascript
var staticRoutes = [
    '/',
    '/auth/login',
    '/auth/register',
    '/auth/forgot',
];
```
