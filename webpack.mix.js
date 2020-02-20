const mix = require('laravel-mix');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');
require('laravel-micro.js/src/mix');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

mix.tailwind('./tailwind.config.js')
mix.js('resources/js/app.js', 'public/js')
mix.sass('resources/css/icons.sass', 'public/css')
mix.postCss('resources/css/app.pcss', 'public/css')
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
mix.micro([
    "App",
    "Kernel",
    "Events",
    "Http",
    "Router",
    "Middleware",
    "Route",
    "Request",
    "userResolver",
    "Repository",
    "Config",
    "AbstractStore",
    "Auth",
    "Resource",
    "Menus",
    "TokenResource",
    "UserResource",
    "Vue",
    "VueRoot",
    "Authenticated",
    "UnAuthenticated",
    "UnAuthorized",
    "Response",
])
mix.babelConfig({
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
    ],
})
mix.webpackConfig({
    devtool: 'cheap-source-map',
    output: {chunkFilename: 'js/[name].js'},
    resolve: {
        alias: {
            '@controllers': path.resolve(__dirname, 'resources/js/controllers'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@middleware': path.resolve(__dirname, 'resources/js/middleware'),
            '@listeners': path.resolve(__dirname, 'resources/js/listeners'),
            '@events': path.resolve(__dirname, 'resources/js/events'),
            '@views': path.resolve(__dirname, 'resources/js/views'),
        }
    },
})
// mix.options({
//     hmrOptions: {
//         host: 'laravel-boilerplate.test',
//         port: 8000,
//     },
// })
mix.browserSync({
    proxy: 'http://laravel-boilerplate.test',
    open: true,
    notify: false,
    files: [
        'resources/css/**/*',
    ],
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
