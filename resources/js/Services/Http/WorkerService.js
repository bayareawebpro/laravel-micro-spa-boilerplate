export default class WorkerService {

    constructor(Events) {
        this.$events = Events
    }

    get isSupported(){
        return ('navigator' in window && 'serviceWorker' in navigator)
    }

    get isAvailable(){
        return (navigator.serviceWorker.controller)
    }

    async install() {
        if (this.isSupported) {
            return await navigator.serviceWorker
                .register('/worker.js', {scope: '.'})
                .then(()=>navigator.serviceWorker.ready)
                .then(this.onInstalled.bind(this), this.onFailed.bind(this))
        }else{
            console.warn('ServiceWorker UnAvailable')
        }
        return Promise.reject(new Error('ServiceWorker UnAvailable'))
    }

    /**
     * Registration Successful Handler.
     * @param registration {ServiceWorkerRegistration}
     */
    onInstalled(registration) {
        this.$events.$emit('worker:registered', registration)
    }

    /**
     * Registration Failed Handler.
     * @param error {Error}
     */
    onFailed(error) {
        this.$events.$emit('worker:failed', error)
    }

    /**
     * Dispatch Event to Queue Worker.
     * @param job {Object}
     * @return {Promise}
     * @docs https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage
     */
    dispatch(job) {
        return new Promise((resolve, reject) =>{
            if(!this.isSupported || !this.isAvailable) reject();
            const channel = new MessageChannel();
            channel.port1.onmessage = (event) =>{
                if (event.data.error) {
                    reject(event.data.error);
                } else {
                    resolve(event.data);
                }
            };
            navigator.serviceWorker.controller.postMessage(job,[channel.port2]);
        });
    }
}
