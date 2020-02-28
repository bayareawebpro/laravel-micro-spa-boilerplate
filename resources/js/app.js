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
App.errorHandler(ErrorHandler)
App.register(AppServiceProvider)
App.setInstance('AutoLoader', AutoLoader)
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
App.share('App').withOthers(window)

/**
 * Install Service Worker
 */
if(['production'].includes(process.env.MIX_APP_ENV)){
    App.make('Worker').install()
}

console.log(process.env.MIX_APP_ENV)


