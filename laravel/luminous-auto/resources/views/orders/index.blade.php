<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Mange Orders') }}
        </h2>
    </x-slot>
<div class="card">
    <div class="card-header">Order List</div>
    <div class="card-body">
        @can('create-order')
            <a href="{{ route('orders.create') }}" class="btn btn-success btn-sm my-2"><i class="bi bi-plus-circle"></i> Add New Order</a>
        @endcan
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                <th scope="col">Order #</th>
                <th scope="col">Product Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($orders as $order)
                <tr>
                    <th scope="row">{{ $loop->iteration }}</th>
                    <td>{{ $order->productname }}</td>
                    <td>{{ $order->unitprice }}</td>
                    <td>{{ $order->quantity }}</td>
                    <td>{{ $order->totalprice }}</td>
                    <td>
                        <form action="{{ route('orders.destroy', $order->id) }}" method="post">
                            @csrf
                            @method('DELETE')

                            <a href="{{ route('orders.show', $order->id) }}" class="btn btn-warning btn-sm"><i class="bi bi-eye"></i> Show</a>

                            @can('edit-order')
                                <a href="{{ route('orders.edit', $order->id) }}" class="btn btn-primary btn-sm"><i class="bi bi-pencil-square"></i> Edit</a>
                            @endcan

                            @can('delete-order')
                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Do you want to delete this order?');"><i class="bi bi-trash"></i> Delete</button>
                            @endcan
                        </form>
                    </td>
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

        {{ $orders->links() }}

    </div>
</div>
</x-app-layout>