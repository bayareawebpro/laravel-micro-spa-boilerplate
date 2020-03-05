"use strict";
/**
 * Laravel Micro Application Boilerplate
 * @author Dan Alvidrez mailto:dan@bayareawebpro.com
 * @copyright © 2020 All Rights Reserved.
 */
import Application from "./application"
import AutoLoader from "./utilities/AutoLoader"
import ErrorHandler from "./Utilities/ErrorHandler"
import {AppServiceProvider, Repository} from "laravel-micro.js"
import Route from "./Services/Router/VueRoute"
/**
 * Boot Application
 */
const App = new Application
App.errorHandler(ErrorHandler)
App.register(AppServiceProvider)
App.setInstance('AutoLoader', AutoLoader)
App.loadProviders()
App.bootProviders()
App.make('VueRoot').$nextTick(()=>{
    const config = App.make('Config')
    if(['production'].includes(config.get('environment'))){
        App.make('Worker').then((worker) => worker.install())
    }
    console.log('Loaded')
})
