<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create Orders') }}
        </h2>
    </x-slot>

<div class="row justify-content-center">
    <div class="col-md-8">

        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    Add New Order
                </div>
                <div class="float-end">
                    <a href="{{ route('orders.index') }}" class="btn btn-primary btn-sm">&larr; Back</a>
                </div>
            </div>
            <div class="card-body">
                <form action="{{ route('orders.store') }}" method="post">
                    @csrf

                    <div class="mb-3 row">
                        <label for="productname" class="col-md-4 col-form-label text-md-end text-start">Product Name</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('productname') is-invalid @enderror" id="productname" name="productname" value="{{ old('productname') }}">
                            @if ($errors->has('productname'))
                                <span class="text-danger">{{ $errors->first('productname') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="unitprice" class="col-md-4 col-form-label text-md-end text-start">Unit Price</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('unitprice') is-invalid @enderror" id="unitprice" name="unitprice" value="{{ old('unitprice') }}">
                            @if ($errors->has('unitprice'))
                                <span class="text-danger">{{ $errors->first('unitprice') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="quantity" class="col-md-4 col-form-label text-md-end text-start">Quantity</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('quantity') is-invalid @enderror" id="quantity" name="quantity" value="{{ old('quantity') }}">
                            @if ($errors->has('quantity'))
                                <span class="text-danger">{{ $errors->first('quantity') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="totalprice" class="col-md-4 col-form-label text-md-end text-start">Total Price</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('totalprice') is-invalid @enderror" id="totalprice" name="totalprice" value="{{ old('totalprice') }}">
                            @if ($errors->has('totalprice'))
                                <span class="text-danger">{{ $errors->first('totalprice') }}</span>
                            @endif
                        </div>
                    </div>

                    <!-- <div class="mb-3 row">
                        <label for="description" class="col-md-4 col-form-label text-md-end text-start">Description</label>
                        <div class="col-md-6">
                            <textarea class="form-control @error('description') is-invalid @enderror" id="description" name="description">{{ old('description') }}</textarea>
                            @if ($errors->has('description'))
                                <span class="text-danger">{{ $errors->first('description') }}</span>
                            @endif
                        </div>
                    </div> -->
                    
                    <div class="mb-3 row">
                        <input type="submit" class="col-md-3 offset-md-5 btn btn-primary" value="Add Order">
                    </div>
                    
                </form>
            </div>
        </div>
    </div>    
</div>
</x-app-layout>