<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- SEO -->
    <title>{{ $appState->get('title') }}</title>
    <meta name="description" content="{{ $appState->get('description') }}">

    <!-- WebApp Compatible -->
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="{{ $appState->get('title') }}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="{{ $appState->get('title') }}">

    <!-- WebApp Theme -->
    <meta name="theme-color" content="#F85443">
    <meta name="msapplication-TileColor" content="#F85443">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="apple-touch-icon" href="/images/icon-196x196.png">

    <!-- DNS PreConnect / PreLoad -->
    <link rel="preconnect" href="{{ config('app.url') }}">
    <link rel="preload" href="{{ asset(mix('js/app.js')) }}" as="script">
    <link rel="preload" href="{{ asset(mix('css/app.css')) }}" as="style">

    <!-- Application State -->
    <script>window.__APP_STATE__ = {!! $appState !!}</script>

    <!-- Asset URLs -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('js/app.js') }}" async></script>
</head>
<body>
    @yield('layout')
    <noscript>
        <h1>{{ $appState->get('title') }}</h1>
        <div class="alert alert-warn">This application requires Javascript to render.</div>
    </noscript>
</body>
</html>
