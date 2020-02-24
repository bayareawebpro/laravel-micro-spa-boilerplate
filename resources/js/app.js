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
