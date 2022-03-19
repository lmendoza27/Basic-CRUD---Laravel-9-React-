<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\Api\ChiefController;
use App\Http\Controllers\Api\RecipeController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::post('/products', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
    Route::get('/cheap', 'cheaper');
    Route::get('/search/{word}', 'search');
    Route::post('/products2', 'store2')->middleware('auth:api');
});

Route::resource('foods',FoodController::class);

Route::group([
    'middleware' => 'api',
    'prefix' => 'v1/auth'

], function ($router) {
    Route::post('login', [\App\Http\Controllers\Api\V1\AuthController::class, 'login'])->name('login');
    Route::post('logout', [\App\Http\Controllers\Api\V1\AuthController::class, 'logout'])->name('logout');
    Route::post('refresh', [\App\Http\Controllers\Api\V1\AuthController::class, 'refresh'])->name('refresh');
    Route::post('me', [\App\Http\Controllers\Api\V1\AuthController::class, 'me'])->name('me');
});

Route::post('register', [UsuarioController::class, 'register']);
Route::post('login_ecomm', [UsuarioController::class, 'login']);
Route::post('addproduct', [ProductoController::class, 'addProduct']);
Route::get('list', [ProductoController::class, 'list']);
Route::delete('delete/{id}', [ProductoController::class, 'delete']);
Route::get('obtener/{id}', [ProductoController::class, 'getProduct']);
Route::get('buscar/{word}', [ProductoController::class, 'search']);
Route::patch('actualiza/{id}', [ProductoController::class, 'update']);

Route::get('listarchief', [ChiefController::class, 'index']);
Route::get('listarchief2',[ChiefController::class, 'chief']);

Route::get('listar_recipes', [RecipeController::class, 'index']);
Route::get('recipe/{id}', [RecipeController::class, 'show']);