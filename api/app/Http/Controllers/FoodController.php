<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class FoodController extends Controller
{

    public function index()
    {
        return Food::select('id','title','description','image')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',
            'image'=>'required|image'
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->image,$imageName);
            Food::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Product Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a product!!'
            ],500);
        }
    }

    public function show(Food $food)
    {
        return response()->json([
            'food'=>$food
        ]);
    }

    public function update(Request $request, Food $food)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',
            'image'=>'nullable'
        ]);

        try{

            $food->fill($request->post())->update();

            if($request->hasFile('image')){

                // remove old image
                if($food->image){
                    $exists = Storage::disk('public')->exists("product/image/{$food->image}");
                    if($exists){
                        Storage::disk('public')->delete("product/image/{$food->image}");
                    }
                }

                $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->image,$imageName);
                $food->image = $imageName;
                $food->save();
            }

            return response()->json([
                'message'=>'Product Updated Successfully!!'
            ]);

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while updating a product!!'
            ],500);
        }
    }


    public function destroy(Food $food)
    {
        try {

            if($food->image){
                $exists = Storage::disk('public')->exists("product/image/{$food->image}");
                if($exists){
                    Storage::disk('public')->delete("product/image/{$food->image}");
                }
            }

            $food->delete();

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
}
