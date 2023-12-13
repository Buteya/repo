<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Home') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <!-- {{ __("You're logged in!") }} -->
                    <div class="row row-cols-1 row-cols-md-3 g-4">
      @foreach ($products as $product)
      <div class="card" style="width: 18rem;margin:5px;">
  <img src="{{ asset('/storage/' . $product->images[0]) }}"  class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ $product->brand }}</h5>
    <p class="card-text">{{ $product->model }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Description:</b> {{ $product->description }}</li>
    <li class="list-group-item"><b>Fuel Type:</b> {{ $product->fueltype }}</li>
    <li class="list-group-item"><b>Price:</b> Ksh{{ number_format($product->price,2, '.', ',') }}</li>
  </ul>
  <div class="card-body">
    <a href="{{ route('dashboardview', $product->id) }}" class="btn btn-outline-primary">View</a>
    <a href="#" class="btn btn-primary" style="float:right">Buy</a>
  </div>
</div>
@endforeach
</div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
