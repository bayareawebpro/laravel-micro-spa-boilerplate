<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Attachment;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Attachment::class, function (Faker $faker) {
    return [
        'name' => \Illuminate\Support\Str::random(16).'jpg',
        'size' => $faker->numberBetween(1000, 10000),
        'mime' => $faker->mimeType,
    ];
});
