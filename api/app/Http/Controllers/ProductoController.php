<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductoController extends Controller
{

    function addProduct(Request $request)
    {
    $request->validate([
        'name'=>'required',
        'price'=>'required',
        'description'=>'required',
        'file'=>'required|image'
    ]);

    try{
        $imageName = Str::random().'.'.$request->file->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('products', $request->file,$imageName);
        Producto::create($request->post()+['file_path'=>'public/products/'.$imageName]);

        return response()->json([
            'message'=>'Producto Creado Satisfactoriamente!!'
        ]);
    }catch(\Exception $e){
        \Log::error($e->getMessage());
        return response()->json([
            'message'=>'Something goes wrong while creating a product!!'
        ],500);
    }


    }

    function list()
    {
        return Producto::all();
    }

    function delete($id)
    {

        $result = Producto::where('id', $id)->get();
        $image = $result[0]->file_path;
        try {
           
            if($image){
                $exists = Storage::disk('public')->exists(substr(($image),7));
                if($exists){
                    Storage::disk('public')->delete(substr(($image),7));
                }
            }

            Producto::where('id', $id)->delete();

            return response()->json([
                'message'=>'Product Deleted Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while deleting a product!!'
            ]);
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

    function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required',
            'price'=>'required',
            'description'=>'required',
            'image'=>'nullable'
        ]);
        

        $product = Producto::find($id);
        $product->description = $request->description;
        $product->price = $request->price;
        $product->name = $request->name;
 
        if($request->hasFile('file')){
 
            // remove old image
            if($product->file_path){
                /*return response()->json([
                    'message'=>$product->file_path
                ]); */
                $exists = Storage::disk('public')->exists(substr(($product->file_path),7));
                if($exists){
                    Storage::disk('public')->delete(substr(($product->file_path),7));
                }
            }

            $imageName = Str::random().'.'.$request->file->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('products', $request->file,$imageName);
            $product->file_path = 'public/products/'.$imageName;
            $product->save();
            return $product; 
        }else{

            $product->save();
            return $product; 
        }




    }


}
