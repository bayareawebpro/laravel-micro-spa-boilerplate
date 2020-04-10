"use strict";
/**
 * Laravel Micro Application Boilerplate
 * @author Dan Alvidrez mailto:dan@bayareawebpro.com
 * @copyright © 2020 All Rights Reserved.
 */
import Application from "./application"
import AutoLoader from "./Utilities/AutoLoader"
import ErrorHandler from "./Utilities/ErrorHandler"
import DuskTestUtils from "./Utilities/DuskTestUtils"
import {AppServiceProvider} from "laravel-micro.js"

/**
 * Boot Application
 */
const App = new Application
App.errorHandler(ErrorHandler)
App.register(AppServiceProvider)
App.setInstance('AutoLoader', AutoLoader)
App.bind('DuskTestUtils', DuskTestUtils)
App.loadProviders()
App.bootProviders()
App.make('VueRoot')

/**
 * Register TestUtils
 */
App.share('DuskTestUtils').withOthers(window)
App.share('App').withOthers(window)


/**
 * Mount Vue Root
 */
const VueRoot = App.make('VueRoot')

/**
 * Install Worker
 */
// VueRoot.$nextTick(()=>{
//     App.make('Worker').then((worker) => {
//         worker.install().then(()=>{
//             worker.dispatch({
//                 command: 'commandA',
//                 data: {
//                     test:123
//                 }
//             })
//             .then((data)=>{
//                 console.log('WorkerResult', data)
//             })
//         })
//     })
// })
