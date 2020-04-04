<?php declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FeedReader
{
    public function read(){
        dd(Http::get('http://reddit.com/r/programming.rss')->body());
        new \SimpleXMLElement();
    }
}
