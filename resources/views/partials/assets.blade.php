<!-- PreConnect-->
<link rel="preconnect" href="{{ config('app.url') }}">

<!-- PreLoad -->
@foreach($appState->get('assets') as $entry)
@switch($entry['type'])
@case('js')
<link rel="preload" href="{{ $entry['url'] }}" as="script">
@break
@case('css')
<link rel="preload" href="{{ $entry['url'] }}" as="style">
@break
@endswitch
@endforeach

<!-- Application State -->
<script>window.__APP_STATE__ = {!! $appState !!}</script>

<!-- Asset URLs -->
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
<script src="{{ mix('js/app.js') }}" defer></script>
