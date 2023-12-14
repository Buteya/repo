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
    <form method="POST" action="{{ route('orderlist.store') }}"  style="float:right">
    @csrf 
    <textarea
                name="message"
                placeholder="{{ __('What\'s on your mind?') }}"
                class="hidden block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            >pending</textarea>
            <textarea
                name="product_id"
                placeholder="{{ __('What\'s on your mind?') }}"
                class="hidden block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            >{{$product->id}}</textarea>
    <x-primary-button style="background-color: blue !important;border:1px solid blue !important;">Buy</x-primary-button>
  </form>
  </div>
</div>
@endforeach
</div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
