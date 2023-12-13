<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class OrderController extends Controller
{

     /**
     * Instantiate a new OrderController instance.
     */
    public function __construct()
    {
       $this->middleware('auth');
       $this->middleware('permission:create-order|edit-order|delete-order', ['only' => ['index','show']]);
       $this->middleware('permission:create-order', ['only' => ['create','store']]);
       $this->middleware('permission:edit-order', ['only' => ['edit','update']]);
       $this->middleware('permission:delete-order', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index() : View
    {
        return view('orders.index', [
            'orders' => Order::latest()->paginate(3)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() : View
    {
        return view('orders.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request) : RedirectResponse
    {
        Order::create($request->all());
        return redirect()->route('orders.index')
                ->withSuccess('New order is added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order) : View
    {
        return view('orders.show', [
            'order' => $order
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order) : View
    {
        return view('orders.edit', [
            'order' => $order
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order) : RedirectResponse
    {
        $order->update($request->all());
        return redirect()->back()
                ->withSuccess('Order is updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();
        return redirect()->route('orders.index')
                ->withSuccess('Order is deleted successfully.');
    }
}
