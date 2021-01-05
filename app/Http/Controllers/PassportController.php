<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
class PassportController extends Controller
{
    function show(){
        return response()->json('sad', 200);
    }
    function register(Request $request){
        $user = new User;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        $token = $user->createToken('authToken')->accessToken;
        $dataUser = User::findOrFail($user->id);
        return response()->json(['status'=>'success',"user"=>$dataUser, 'token' => $token], 200);
    }
    function login(Request $request){
        $login = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($login)) {
            return response()->json(['status'=>'failed']);
        }

        $token = auth()->user()->createToken('authToken')->accessToken;

        return response()->json(['status'=>'success','user' => auth()->user(), 'token' => $token],201);
    }
}
