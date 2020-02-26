<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
{{--    <link rel="prefetch" href="{{ mix('js/auth.js') }}">--}}
{{--    <link rel="prefetch" href="{{ mix('js/base.js') }}">--}}
{{--    <link rel="prefetch" href="{{ mix('js/users.js') }}">--}}
{{--    <link rel="prefetch" href="{{ mix('js/tokens.js') }}">--}}
{{--    <link rel="prefetch" href="{{ mix('js/dashboard.js') }}">--}}
{{--    <link rel="prefetch" href="{{ mix('js/framework.js') }}">--}}
{{--    <link rel="prefetch" href="{{ mix('js/http-progress.js') }}">--}}
    <script src="{{ mix('js/app.js') }}" async defer></script>
    <link href="{{ mix('css/icons.css') }}" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
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

{{--    <link rel="preconnect" href="{{ config('filesystems.disks.spaces.edge') }}" crossorigin>--}}
{{--    <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>--}}
{{--    <link rel="preconnect" href="https://maps.googleapis.com"  crossorigin>--}}
{{--    <link rel="preconnect" href="https://maps.gstatic.com" crossorigin>--}}
{{--    <link rel="preconnect" href="https://i3.ytimg.com" crossorigin>--}}

</head>
<body>
    <div id="app"></div>
    <noscript>:(</noscript>
</body>
</html>
