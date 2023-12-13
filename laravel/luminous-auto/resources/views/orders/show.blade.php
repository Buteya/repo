<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Show Orders') }}
        </h2>
    </x-slot>
<div class="row justify-content-center">
    <div class="col-md-8">

        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    Order Information
                </div>
                <div class="float-end">
                    <a href="{{ route('orders.index') }}" class="btn btn-primary btn-sm">&larr; Back</a>
                </div>
            </div>
            <div class="card-body">

                    <div class="row">
                        <label for="productname" class="col-md-4 col-form-label text-md-end text-start"><strong>Product Name:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $order->productname }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="unitprice" class="col-md-4 col-form-label text-md-end text-start"><strong>Unit Price:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $order->unitprice }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="quantity" class="col-md-4 col-form-label text-md-end text-start"><strong>Quantity:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $order->quantity }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="totalprice" class="col-md-4 col-form-label text-md-end text-start"><strong>Total Price:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $order->totalprice }}
                        </div>
                    </div>
                    



                    <!-- <div class="row">
                        <label for="description" class="col-md-4 col-form-label text-md-end text-start"><strong>Description:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->description }}
                        </div>
                    </div> -->
        
            </div>
        </div>
    </div>    
</div>
</x-app-layout>