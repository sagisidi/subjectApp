<?php

use Faker\Generator as Faker;

$factory->define(App\Subject::class, function (Faker $faker) {
    return [
        'name'=>$faker->text(50),
        'phone'=>$faker->text(50)
    ];
});
