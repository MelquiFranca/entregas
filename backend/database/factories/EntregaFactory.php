<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entrega;
use Faker\Generator as Faker;

$factory->define(Entrega::class, function (Faker $faker) {
    return [
        'cliente' => $faker->name,
        'dataEntrega' => $faker->date,
        'localOrigem' => $faker->address,
        'localDestino' => $faker->address
    ];
});
