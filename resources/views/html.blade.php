<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <meta name="theme-color" content="#000000">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="PWA">
    <meta name="application-name" content="PWA">
    <link rel="preconnect" href="{{ config('app.url') }}">
    <link rel="preload" href="{{ asset(mix('js/app.js')) }}" as="script">
    <link rel="preload" href="{{ asset(mix('css/app.css')) }}" as="style">
    <script>window.__APP_STATE__ = {!! $appState !!}</script>
    <script src="{{ mix('js/app.js') }}" async></script>
    <link href="{{ mix('css/icons.css') }}" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
    @yield('layout')
</body>
</html>
