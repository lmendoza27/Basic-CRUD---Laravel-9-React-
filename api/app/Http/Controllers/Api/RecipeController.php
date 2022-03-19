<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\models\Chief;
use App\models\Recipe;
use Illuminate\Support\Facades\DB;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipes = DB::table('recipes')
                       ->join('chiefs', 'recipes.id_chief', '=', 'chiefs.id')
                       ->select('recipes.id','recipes.name','recipes.image','recipes.image','recipes.description','chiefs.name as chief_name','chiefs.image as chief_image')
                       ->get();
        return $recipes;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recipes = DB::table('recipes')
        ->join('chiefs', 'recipes.id_chief', '=', 'chiefs.id')
        ->select('recipes.id','recipes.name','recipes.image','recipes.image','recipes.description','chiefs.name as chief_name','chiefs.image as chief_image')
        ->where('recipes.id', $id)
        ->get();
return $recipes;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
