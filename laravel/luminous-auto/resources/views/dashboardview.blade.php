<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Home') }}
        </h2>
    </x-slot>
    <div class="container" style="width: 1000px;padding:10px;">
    <div class="card mb-3">
  <img src="{{ asset('/storage/' . $product->images[0]) }}" class="card-img-top" style="height: 370px;" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ $product->brand }}</h5>
    <p class="card-text">{{ $product->model }}</p>
    <hr/>
    <p class="card-text">Year: {{ $product->yearofmanufacture }}</p>
    <p class="card-text">Fuel: {{ $product->fueltype }}</p>
    <p class="card-text">Mileage: {{ $product->mileage }}</p>
    <p class="card-text">Enginecc: {{ $product->enginecc }}</p>
    <p class="card-text">Description: {{ $product->description }}</p>
    <p class="card-text">Price: <b>Ksh</b>{{ number_format($product->price,2, '.', ',') }}</p>
    <p class="card-text"><small class="text-body-secondary">last udated at {{ date('d/m/Y', strtotime($product->updated_at)) }}</small></p>
    <a href="{{ route('dashboard') }}" class="btn btn-primary" style="float:right;">Back</a>
  </div>
</div>
</div>
</x-app-layout>
