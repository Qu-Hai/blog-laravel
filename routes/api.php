<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/register', 'PassportController@register');
Route::post('/login', 'PassportController@login');
Route::get('/post/first', 'PostController@first');
Route::get('/post/limit', 'PostController@limit');
Route::apiResources([
                 'user'=>UserController::class,
                 'post'=> PostController::class,
                 'category'=>CategoryController::class 
                 ]);
Route::middleware('auth:api')->get('/me','UserController@index');
