"use strict";
/**
 * Laravel Micro Application Boilerplate
 * @author Dan Alvidrez mailto:dan@bayareawebpro.com
 * @copyright © 2020 All Rights Reserved.
 */
import Application from "./application"
import AutoLoader from "./utilities/AutoLoader"
import ErrorHandler from "./Utilities/ErrorHandler"
import {AppServiceProvider} from "laravel-micro.js"

/**
 * Boot Application
 */
const App = new Application
App.setInstance('AutoLoader', AutoLoader)
App.errorHandler(ErrorHandler)
App.register(AppServiceProvider)
App.loadProviders()
App.bootProviders()

/**
 * Boot Application
 */
App.make('VueRoot')
    .$mount("#app")
/**
 * Share Application with window.
 * @example window.$app().make(...)
 */


App.share('App').withOthers(window);

// Initialize the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/worker.js', {scope: '.'})
        .then( (registration) =>{
            if (registration.active) {
                console.log('LaravelMicro: Worker registration successful with scope: ', registration.scope);
                const serviceWorker = registration.active;
                fetch('/mix-manifest.json')
                    .then(response => response.json())
                    .then(data => {
                        serviceWorker.postMessage({command: 'cache', data});
                    })
            }
        }, (err) =>{
            console.log('LaravelMicro: Worker registration failed: ', err);
        });
}

