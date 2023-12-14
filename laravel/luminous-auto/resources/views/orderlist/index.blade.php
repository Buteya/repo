<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Orders') }}
        </h2>
    </x-slot>
    <div class="card">
    <div class="card-header">Ordered List</div>
 
   
    <div class="card-body">
        <!-- @can('create-product')
            <a href="{{ route('products.create') }}" class="btn btn-success btn-sm my-2"><i class="bi bi-plus-circle"></i> Add New Product</a>
        @endcan -->
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                <th scope="col">Order #</th>
                <th scope="col">ProductId</th>
                <!-- <th scope="col">Brand</th>
                <th scope="col">Model</th> -->
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($orderlists as $order)
                <tr> 
                     @if( Auth::user()->id == $order->user_id )
                    <th scope="row">{{ $loop->iteration }}</th>
                    <!-- <td><img src="{{ asset('/storage/' . $order->message) }}" alt="multiple image" class="w-20 h-20 border border-blue-600"></td> -->
                    <td>{{ $order->product_id }}</td>
                    <td>{{ $order->message }}</td>
                    <!-- <td>{{ $order->message}}</td>
                    <td>{{ $order->message}}</td> -->
                    <td>
                        <form action="" method="post">
                            @csrf
                            @method('DELETE')

                            <a href="" class="btn btn-warning btn-sm"><i class="bi bi-eye"></i> Show</a>

                            @can('edit-product')
                                <a href="" class="btn btn-primary btn-sm"><i class="bi bi-pencil-square"></i> Edit</a>
                            @endcan

                            @can('delete-product')
                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Do you want to delete this product?');"><i class="bi bi-trash"></i> Delete</button>
                            @endcan
                        </form>
                    </td>
                     @endif
                </tr>
                
                @empty
                    <td colspan="4">
                        <span class="text-danger">
                            <strong>No Order Found!</strong>
                        </span>
                    </td>
                   
                @endforelse
            </tbody>
        </table>

        {{ $orderlists->links() }}

    </div>
    
</x-app-layout>
