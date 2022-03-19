<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\models\Chief;
use App\models\Recipe;
use Illuminate\Support\Facades\DB;

class ChiefController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $chiefs = Chief::all();
        return $chiefs;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function chief()
    {
        /*$chiefs = Chief::all();
        $recipe_count = Recipe::where('id_chief','=',1)->get();
        $recipe_count = $recipe_count->count();
        $chiefs[0]->comida = 'hola';
        $chiefs[0]->cantidad = $recipe_count;*/

        $chiefs = Chief::all();

        foreach($chiefs as $chief)
        {
            //$chiefs = Chief::all();
            $recipe_count = Recipe::where('id_chief','=',$chief->id)->get();
            $recipe_count = $recipe_count->count();
            $chief->cantidad = $recipe_count;
            //$chief = Chief::where('id','=',$chief->id)->get();
            //$chief->name = $chief->name;
            //$chief->comida = 'Holis';
        }

        // Hacer un array... funca
        return $chiefs;
    }

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
        //
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
