<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- SEO -->
    <title>{{ config('spa.seo.title') }}</title>
    <meta name="description" content="{{ config('spa.seo.description') }}">

    <!-- WebApp Compatible -->
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="{{ config('spa.seo.title') }}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="{{ config('spa.seo.title') }}">

    <!-- WebApp Theme -->
    <meta name="theme-color" content="#F85443">
    <meta name="msapplication-TileColor" content="#F85443">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="apple-touch-icon" href="/images/icon-196x196.png">

    <!-- PreConnect-->
    <link rel="preconnect" href="{{ config('app.url') }}">

    <!-- PreLoad -->
    <link rel="preload" href="{{ mix('js/app.js') }}" as="script">
    <link rel="preload" href="{{ mix('css/app.css') }}" as="style">

    <!-- Application State -->
    <script>window.__APP_STATE__ = {!! $appState !!}</script>

    <!-- Asset URLs -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/app.js') }}" defer></script>

</head>
<body>
    @yield('layout')
    <noscript>
        <div class="alert alert-warn">This application requires Javascript to render.</div>
    </noscript>
</body>
</html>
