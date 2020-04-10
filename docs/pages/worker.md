# Worker

> /resources/js/worker.js

The Service Worker service is designed to allow background browser processes to communicate with the front-end client.

## Installing the Worker

> /resources/js/bootstrap.js

```javascript
App.make('Worker').then((worker) => worker.install())
```
