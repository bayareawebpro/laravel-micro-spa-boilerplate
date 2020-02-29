const mix = require('laravel-mix');
require('laravel-micro.js/src/mix');
require('laravel-mix-purgecss');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

/**
 * Styles & Assets
 */

mix.postCss('resources/css/app.pcss', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
])
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
mix.sass('resources/css/icons.sass', 'public/css')

/**
 * Javascript
 */
mix.js('resources/js/app.js', 'public/js')
mix.copy('resources/js/worker.js', 'public/worker.js')
mix.copy('resources/js/manifest.json', 'public/manifest.json')
mix.babelConfig({
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
    ],
})
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
//     proxy: 'http://laravel-micro-spa.test',
//     open: true,
//     notify: false,
//     files: [
//         'resources/css/**/*',
//     ],
// })
mix.options({
    hmrOptions: {
        host: 'laravel-micro-spa.test',
        port: 8080,
    },
})
if (mix.inProduction()) {
    mix.purgeCss()
    mix.version()
    mix.webpackConfig({
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
            })
        ],
    })
}
