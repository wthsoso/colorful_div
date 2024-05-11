<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //
    

    //
    public function language(){
        // return "Profile Languages - ".$language;
        return view("language");
    }
}
