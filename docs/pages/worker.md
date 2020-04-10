# Worker

> /resources/js/worker.js

The Service Worker service is designed to 
allow the client to dispatch data to be processes by the Service Worker.

The Worker will parse the mix-manifest and cache all assets when installed.

> Worker is a WIP, please contribute. 

## Installing the Worker

> /resources/js/bootstrap.js

```javascript
VueRoot.$nextTick(()=>{
    App.make('Worker').then((worker) => {
        worker.install().then(()=>{
           // Dispatch Task
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

> /resources/js/worker.js

```javascript
var staticRoutes = [
    '/',
    '/auth/login',
    '/auth/register',
    '/auth/forgot',
];
```
