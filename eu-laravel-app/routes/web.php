<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name("gen");

Route::get('/education', function () {
    return view('education');
})->name("edu");

Route::get('/experience', function () {
    return view('experience');
})->name("exper");

Route::get('/lang/{lang?}', [App\Http\Controllers\ProfileController::class, 'language_lavel'])->name("lang_lavel");



// Route::get('/language/{lang?}', function ($language="EN"){   
//     return $language;
// });




