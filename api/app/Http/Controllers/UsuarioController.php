<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    function register(Request $request)
    {
        $user = new Usuario;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $request)
    {
        $user = Usuario::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password,$user->password))
        {
            return ["error"=>"Correo y/o Password Incorrecto(s)"];
        }
        return $user;   
    }
}
