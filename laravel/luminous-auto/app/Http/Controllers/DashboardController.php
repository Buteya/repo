<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

// Importing the App\Models namespace
use App\Models;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all the products
    $products = Product::all();

    // Return the dashboard view with the products
    return view('dashboard', compact('products'));
  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {

        // Get the product with that id
        $product = Product::find($id);
    
        // Return the product view with the product
       
        return view('dashboardview', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
