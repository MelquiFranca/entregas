<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entrega extends Model
{
    protected $table = 'entregas';
    public $timestamps = true;

    protected $fillable = array(
        'cliente',
        'dataEntrega',
        'localOrigem',
        'localDestino'
    );

    protected $guarded = ['id'];
}
