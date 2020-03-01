const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const mix = require('laravel-mix');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');
require('laravel-micro.js/src/mix');

/**
 * Styles & Assets
 */
mix.tailwind('./tailwind.config.js')
mix.postCss('resources/css/app.pcss', 'public/css')
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
mix.purgeCss()

/**
 * Javascript
 */
mix.js('resources/js/app.js', 'public/js')
mix.copy('resources/js/worker.js', 'public/worker.js')
mix.copy('resources/js/manifest.json', 'public/manifest.json')
mix.webpackConfig({
    output: {chunkFilename: 'js/[name].js'},
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
mix.babelConfig({
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
    ],
})

/**
 * LaravelMicro.js
 * @docs https://bayareawebpro.github.io/laravel-micro.js/#/
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
])
// mix.browserSync({
//     proxy: 'laravel-micro-spa.test',
//     host: 'laravel-micro-spa.test',
//     open: 'external'
// })
mix.options({
    hmrOptions: {
        host: 'laravel-micro-spa.test',
        port: 8080,
    }
})
if (mix.inProduction()) {
    mix.version()
    mix.webpackConfig({
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
            })
        ],
    })
}
