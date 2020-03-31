<?php declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\File;
use League\CommonMark\GithubFlavoredMarkdownConverter;

class Markdown {

    protected static array $options = [
        //'html_input' => 'strip',
        //'allow_unsafe_links' => true,
    ];

    public static function parse(string $markdown)
    {
        return with(new GithubFlavoredMarkdownConverter(static::$options))->convertToHtml($markdown);
    }

    public static function load(string $path)
    {
        $path = resource_path("markdown/$path.md");

        if(File::exists($path)){
            return static::parse(File::get($path));
        }
    }
}
