<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit Products') }}
        </h2>
    </x-slot>
<div class="row justify-content-center">
    <div class="col-md-8">

        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    Edit Product
                </div>
                <div class="float-end">
                    <a href="{{ route('products.index') }}" class="btn btn-primary btn-sm">&larr; Back</a>
                </div>
            </div>
            <div class="card-body">
                <form action="{{ route('products.update', $product->id) }}" method="post">
                    @csrf
                    @method("PUT")

                    <div class="mb-3 row">
                        <label for="yearofmanufacture" class="col-md-4 col-form-label text-md-end text-start">Year Of Manufacture</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('yearofmanufacture') is-invalid @enderror" id="yearofmanufacture" name="yearofmanufacture" value="{{ $product->yearofmanufacture }}">
                            @if ($errors->has('yearofmanufacture'))
                                <span class="text-danger">{{ $errors->first('yearofmanufacture') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="brand" class="col-md-4 col-form-label text-md-end text-start">Brand</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('brand') is-invalid @enderror" id="brand" name="brand" value="{{ $product->brand }}">
                            @if ($errors->has('brand'))
                                <span class="text-danger">{{ $errors->first('brand') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="model" class="col-md-4 col-form-label text-md-end text-start">Model</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('model') is-invalid @enderror" id="model" name="model" value="{{ $product->model }}">
                            @if ($errors->has('model'))
                                <span class="text-danger">{{ $errors->first('model') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="fueltype" class="col-md-4 col-form-label text-md-end text-start">Fuel Type</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('fueltype') is-invalid @enderror" id="fueltype" name="fueltype" value="{{ $product->fueltype }}">
                            @if ($errors->has('fueltype'))
                                <span class="text-danger">{{ $errors->first('fueltype') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="mileage" class="col-md-4 col-form-label text-md-end text-start">Mileage</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('mileage') is-invalid @enderror" id="mileage" name="mileage" value="{{ $product->mileage }}">
                            @if ($errors->has('mileage'))
                                <span class="text-danger">{{ $errors->first('mileage') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="enginecc" class="col-md-4 col-form-label text-md-end text-start">Engine CC</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('enginecc') is-invalid @enderror" id="enginecc" name="enginecc" value="{{ $product->enginecc }}">
                            @if ($errors->has('enginecc'))
                                <span class="text-danger">{{ $errors->first('enginecc') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="price" class="col-md-4 col-form-label text-md-end text-start">Price</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('price') is-invalid @enderror" id="price" name="price" value="{{ $product->price }}">
                            @if ($errors->has('price'))
                                <span class="text-danger">{{ $errors->first('price') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="description" class="col-md-4 col-form-label text-md-end text-start">Description</label>
                        <div class="col-md-6">
                            <textarea class="form-control @error('description') is-invalid @enderror" id="description" name="description">{{ $product->description }}</textarea>
                            @if ($errors->has('description'))
                                <span class="text-danger">{{ $errors->first('description') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="images" class="col-md-4 col-form-label text-md-end text-start">Images</label>
                        <div class="col-md-6">
                        @foreach($product->images as $image)
                            <img src="{{ asset('/storage/' . $image) }}" alt="multiple image" class="w-20 h-20 border border-blue-600">
                        @endforeach
                            @if ($errors->has('images'))
                                <span class="text-danger">{{ $errors->first('images') }}</span>
                            @endif
                        </div>
                    </div>
                    
                    <div class="mb-3 row">
                        <input type="submit" class="col-md-3 offset-md-5 btn btn-primary" value="Update">
                    </div>
                    
                </form>
            </div>
        </div>
    </div>    
</div>
    
</x-app-layout>