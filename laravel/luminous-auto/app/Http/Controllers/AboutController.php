<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function show()
    {
        return view('about', [
            'company' => 'Luminous Auto',
            'mission' => 'To make car buying and selling online a simple, safe, and satisfying process for everyone.',
            // ...
        ]);
    }
}
