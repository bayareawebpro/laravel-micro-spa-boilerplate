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

    install() {
        if (this.isSupported) {
            navigator.serviceWorker
                .register('/worker.js', {scope: '.'})
                .then(()=>navigator.serviceWorker.ready)
                .then(this.onInstalled.bind(this), this.onFailed.bind(this))
        }else{
            console.warn('ServiceWorker UnAvailable')
        }
        return this
    }

    /**
     * Registration Successful Handler.
     * @param registration {ServiceWorkerRegistration}
     */
    onInstalled(registration) {
        setTimeout(() => {
            this.$events.$emit('worker:registered')
            this.dispatch({
                test:123
            }).then((result)=>{
                console.log(`WorkerResult`, result)
            })
        }, 1000)
    }

    /**
     * Registration Failed Handler.
     * @param error {Error}
     */
    onFailed(error) {
        setTimeout(() => {
            this.$events.$emit('worker:failed', error)
        }, 1000)
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
