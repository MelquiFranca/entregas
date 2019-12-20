<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/entregas', 'EntregaController@index');
Route::get('/entregas/{id}', 'EntregaController@show');
Route::post('/entregas', 'EntregaController@store');
