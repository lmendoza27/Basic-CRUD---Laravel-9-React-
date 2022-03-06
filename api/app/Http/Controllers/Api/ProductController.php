<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\models\Product;


class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return $products;
    }


    public function store(Request $request)
    {
        $product = new Product();
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;

        $product->save();
    }


    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }


    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($request->id);
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;

        $product->save();
        return $product;
    }


    public function destroy($id)
    {
        $product = Product::destroy($id);
        return $product;
    }

    public function cheaper()
    {
        $products = Product::where('price', '<', 10000)->get();
        return $products;
    }

    public function search(Request $request,$word)
    {
        $products = Product::where('description', 'LIKE', '%'.$request->word.'%')->get();
        return $products;
    }

}
