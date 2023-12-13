<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create Products') }}
        </h2>
    </x-slot>

<div class="row justify-content-center">
    <div class="col-md-8">

        <div class="card">
            <div class="card-header">
                <div class="float-start">
                    Add New Product
                </div>
                <div class="float-end">
                    <a href="{{ route('products.index') }}" class="btn btn-primary btn-sm">&larr; Back</a>
                </div>
            </div>
            <div class="card-body">
                <form action="{{ route('products.store') }}" method="post" enctype="multipart/form-data">
                    @csrf

                    <div class="mb-3 row">
                        <label for="yearofmanufacture" class="col-md-4 col-form-label text-md-end text-start">Year Of Manufacture</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('yearofmanufacture') is-invalid @enderror" id="yearofmanufacture" name="yearofmanufacture" value="{{ old('yearofmanufacture') }}">
                            @if ($errors->has('yearofmanufacture'))
                                <span class="text-danger">{{ $errors->first('yearofmanufacture') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="brand" class="col-md-4 col-form-label text-md-end text-start">Brand</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('brand') is-invalid @enderror" id="brand" name="brand" value="{{ old('brand') }}">
                            @if ($errors->has('brand'))
                                <span class="text-danger">{{ $errors->first('brand') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="model" class="col-md-4 col-form-label text-md-end text-start">Model</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('model') is-invalid @enderror" id="model" name="model" value="{{ old('model') }}">
                            @if ($errors->has('model'))
                                <span class="text-danger">{{ $errors->first('model') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="fueltype" class="col-md-4 col-form-label text-md-end text-start">Fuel Type</label>
                        <div class="col-md-6">
                           <input type="text" class="form-control @error('fueltype') is-invalid @enderror" id="fueltype" name="fueltype" value="{{ old('fueltype') }}">
                            @if ($errors->has('fueltype'))
                                <span class="text-danger">{{ $errors->first('fueltype') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="mileage" class="col-md-4 col-form-label text-md-end text-start">Mileage</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('mileage') is-invalid @enderror" id="mileage" name="mileage" value="{{ old('mileage') }}">
                            @if ($errors->has('mileage'))
                                <span class="text-danger">{{ $errors->first('mileage') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="enginecc" class="col-md-4 col-form-label text-md-end text-start">Engine CC</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('enginecc') is-invalid @enderror" id="enginecc" name="enginecc" value="{{ old('enginecc') }}">
                            @if ($errors->has('enginecc'))
                                <span class="text-danger">{{ $errors->first('enginecc') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="price" class="col-md-4 col-form-label text-md-end text-start">Price</label>
                        <div class="col-md-6">
                          <input type="text" class="form-control @error('price') is-invalid @enderror" id="price" name="price" value="{{ old('price') }}">
                            @if ($errors->has('price'))
                                <span class="text-danger">{{ $errors->first('price') }}</span>
                            @endif
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="description" class="col-md-4 col-form-label text-md-end text-start">Description</label>
                        <div class="col-md-6">
                            <textarea class="form-control @error('description') is-invalid @enderror" id="description" name="description">{{ old('description') }}</textarea>
                            @if ($errors->has('description'))
                                <span class="text-danger">{{ $errors->first('description') }}</span>
                            @endif
                        </div>
                    </div>

                    <!-- <div class="mb-6">
                            <label class="block">
                                <span class="text-gray-700">ID</span>
                                <input type="text" name="product_id" class="block w-full @error('id') border-red-500 @enderror mt-1 rounded-md" placeholder="" value="{{DB::table('products')->where('id', DB::table('products')->max('id'))->value('id')}}" />
                            </label>
                            @error('title')
                            <div class="text-sm text-red-600">{{ $message }}</div>
                            @enderror
                        </div> -->
                        <!-- <div class="mb-6">
                            <label class="block">
                                <span class="text-gray-700">Title</span>
                                <input type="text" name="title" class="block w-full @error('title') border-red-500 @enderror mt-1 rounded-md" placeholder="" value="{{old('title')}}" />
                            </label>
                            @error('title')
                            <div class="text-sm text-red-600">{{ $message }}</div>
                            @enderror
                        </div> -->
                        <div class="mb-4">
                            <label class="block">
                                <span class="text-gray-700">Images</span>
                                <input type="file" name="images[]" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" multiple />
                            </label>
                            @error('images')
                            <div class="text-sm text-red-600">{{ $message }}</div>
                            @enderror
                        </div>
                        
                    
                    <div class="mb-3 row">
                        <input type="submit" class="col-md-3 offset-md-5 btn btn-primary" value="Add Product">
                    </div>
                    
                </form>
<!-- 
                <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="{{ route('images.store',[DB::table('products')->where('id', DB::table('products')->max('id'))->value('id')]) }}" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-6">
                            <label class="block">
                                <span class="text-gray-700">ID</span>
                                <input type="text" name="product_id" class="block w-full @error('id') border-red-500 @enderror mt-1 rounded-md" placeholder="" value="{{DB::table('products')->where('id', DB::table('products')->max('id'))->value('id')}}" />
                            </label>
                            @error('title')
                            <div class="text-sm text-red-600">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="mb-6">
                            <label class="block">
                                <span class="text-gray-700">Title</span>
                                <input type="text" name="title" class="block w-full @error('title') border-red-500 @enderror mt-1 rounded-md" placeholder="" value="{{old('title')}}" />
                            </label>
                            @error('title')
                            <div class="text-sm text-red-600">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="mb-4">
                            <label class="block">
                                <span class="text-gray-700">Images</span>
                                <input type="file" name="images[]" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" multiple />
                            </label>
                            @error('images')
                            <div class="text-sm text-red-600">{{ $message }}</div>
                            @enderror
                        </div>
                        <x-primary-button class="ml-3">
                            {{ __('Submit') }}
                        </x-primary-button>
                    </form>
                </div>
            </div>
        </div>
    </div> -->
            </div>
        </div>
    </div>    
</div>
</x-app-layout>