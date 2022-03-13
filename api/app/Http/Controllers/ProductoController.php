<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{

    function addProduct(Request $request)
    {
    $product = new Producto;
    $product->name=$request->input('name');
    $product->price=$request->input('price');
    $product->description=$request->input('description');
    $product->file_path=$request->file('file')->store('public/products');
    $product->save();
    return $product;
    }

    function list()
    {
        return Producto::all();
    }

    function delete($id)
    {
        $result = Producto::where('id', $id)->delete();
        if($result)
        {
            return ["result"=>"Producto ha sido borrado"];
        }else{
            return ["result"=>"Operación fallida"];
        }
    }

    function getProduct($id)
    {
        return Producto::find($id);
    }

    function search($word)
    {
        return Producto::where('name','Like','%'.$word.'%')->get();
    }
}
