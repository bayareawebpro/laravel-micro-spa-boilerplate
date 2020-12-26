const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const mix = require('laravel-mix');
const path = require('path');
require('laravel-micro.js/src/mix');

/**
 * Styles & Assets
 */
mix.postCss('resources/css/app.pcss', 'public/css',[
    require('tailwindcss'),
    require('autoprefixer'),
])
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
mix.copy('resources/images/*', 'public/images')

/**
 * Javascript
 */
mix.js('resources/js/bootstrap.js', 'public/js/app.js')
mix.copy('resources/js/worker.js', 'public/worker.js')
mix.copy('resources/js/manifest.json', 'public/manifest.json')
.vue({
    version: 2,
    extractStyles: false,
    globalStyles: false
})
.webpackConfig({
    optimization: {
        providedExports: false,
        sideEffects: false,
        usedExports: false
    },
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]'},
    resolve: {
        alias: {
            '@controllers': path.resolve(__dirname, 'resources/js/Controllers'),
            '@components': path.resolve(__dirname, 'resources/js/Components'),
            '@middleware': path.resolve(__dirname, 'resources/js/Middleware'),
            '@listeners': path.resolve(__dirname, 'resources/js/Listeners'),
            '@views': path.resolve(__dirname, 'resources/js/Views'),
        }
    },
})
.extract()
.version()
/**
 * LaravelMicro.js
 * @docs https://bayareawebpro.github.io/laravel-micro.js/
 */
mix.micro([
    'App',
    'Kernel',
    'Events',
    'Http',
    'Router',
    'Middleware',
    'Route',
    'Request',
    'userResolver',
    'Repository',
    'Config',
    'Auth',
    'Resource',
    'Menus',
    'TokenResource',
    'UserResource',
    'Vue',
    'VueRoot',
    'Authenticated',
    'Exception',
    'Invalid',
    'NoConnection',
    'NotFound',
    'SessionExpired',
    'UnAuthenticated',
    'UnAuthorized',
], true)
// mix.browserSync({
//     proxy: 'laravel-micro-spa.test',
//     host: 'localhost',
//     open: 'external'
// })
// mix.options({
//     hmrOptions: {
//         host: 'laravel-micro-spa.test',
//         port: 8080,
//     }
// })
if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
            })
        ],
    })
} else {
    mix.webpackConfig({
        devtool: 'cheap-source-map'
    });
}
