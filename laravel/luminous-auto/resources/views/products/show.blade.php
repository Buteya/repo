<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Show Products') }}
        </h2>
    </x-slot>
<div class="row justify-content-center">
    <div class="col-md-8">

        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    Product Information
                </div>
                <div class="float-end">
                    <a href="{{ route('products.index') }}" class="btn btn-primary btn-sm">&larr; Back</a>
                </div>
            </div>
            <div class="card-body">

                    <div class="row">
                        <label for="yearofmanufacture" class="col-md-4 col-form-label text-md-end text-start"><strong>Year Of Manufacture:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->yearofmanufacture }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="brand" class="col-md-4 col-form-label text-md-end text-start"><strong>Brand:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->brand }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="model" class="col-md-4 col-form-label text-md-end text-start"><strong>Model:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->model }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="fueltype" class="col-md-4 col-form-label text-md-end text-start"><strong>Fuel Type:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->fueltype }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="mileage" class="col-md-4 col-form-label text-md-end text-start"><strong>Mileage:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->mileage }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="enginecc" class="col-md-4 col-form-label text-md-end text-start"><strong>Engine CC:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->enginecc }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="price" class="col-md-4 col-form-label text-md-end text-start"><strong>Price:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->price }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="description" class="col-md-4 col-form-label text-md-end text-start"><strong>Description:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                            {{ $product->description }}
                        </div>
                    </div>

                    <div class="row">
                        <label for="images" class="col-md-4 col-form-label text-md-end text-start"><strong>Images:</strong></label>
                        <div class="col-md-6" style="line-height: 35px;">
                        @foreach($product->images as $image)
                            <img src="{{ asset('/storage/' . $image) }}" alt="multiple image" class="w-20 h-20 border border-blue-600">
                        @endforeach
                        </div>
                       
                    </div>

                   
            </div>
        </div>
    </div>    
</div>
</x-app-layout>