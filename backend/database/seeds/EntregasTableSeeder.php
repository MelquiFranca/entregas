<?php

use Illuminate\Database\Seeder;

class EntregasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Entrega::class, 20)->create();
    }
}
