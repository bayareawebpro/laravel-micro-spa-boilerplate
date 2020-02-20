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
    <script src="{{ mix('js/app.js') }}" async></script>
    <link href="{{ mix('css/icons.css') }}" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <noscript>:(</noscript>
    <script>window.__APP_STATE__ = {!! $config->toJson() !!};</script>
</body>
</html>
