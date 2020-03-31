"use strict";
/**
 * Laravel Micro Application Boilerplate
 * @author Dan Alvidrez mailto:dan@bayareawebpro.com
 * @copyright © 2020 All Rights Reserved.
 */
import Application from "./application"
import AutoLoader from "./Utilities/AutoLoader"
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
App.make('VueRoot')

/**
 * Register Service Worker
 */
App.make('VueRoot').$nextTick(()=>{
    App.make('Worker').then((worker) => worker.install())
})
