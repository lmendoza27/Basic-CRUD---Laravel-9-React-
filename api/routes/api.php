<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\FoodController;

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
});

Route::resource('foods',FoodController::class);