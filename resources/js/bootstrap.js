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
const Bootstrap = new Application
Bootstrap.errorHandler(ErrorHandler)
Bootstrap.register(AppServiceProvider)
Bootstrap.setInstance('AutoLoader', AutoLoader)
Bootstrap.loadProviders()
Bootstrap.bootProviders()
Bootstrap.make('VueRoot')

Bootstrap.make('VueRoot').$nextTick(()=>{
    Bootstrap.make('Worker').then((worker) => worker.install())
})
