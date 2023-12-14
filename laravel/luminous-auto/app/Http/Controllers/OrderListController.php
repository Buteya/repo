<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderList;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use App\Models\Product;

class OrderListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : View
    {
        return view('orderlist.index', [
            'orderlists' => OrderList::latest()->paginate(3)
        ]);
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
    public function store(Request $request) :RedirectResponse
    {
        $id = $request->get('id');
        $product = Product::find($id);
        $validated = $request->validate([
            'message' => 'required|string|max:255',
            'product_id' => 'required|integer'
        ]);
 
        $request->user()->orderslist()->create($validated);
 
        return redirect(route('orderlist.store', compact('product')));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
