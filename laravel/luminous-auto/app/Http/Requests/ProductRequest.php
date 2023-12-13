<?php
// The ProductRequest class
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Product;

class ProductRequest extends FormRequest
{
    // Define the validation rules and authorization logic
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string|max:255',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpg,png,jpeg,gif,svg|max:2048'
        ];
    }

    public function authorize()
    {
        return true; // or use some logic to check the user's permission
    }

    // Define the product method to get the current or new product model instance
    public function product()
    {
        // If the route has a product parameter, get the existing product model instance
        if ($this->route('product')) {
            return $this->route('product');
        }

        // Otherwise, return a new product model instance
        return new Product();
    }
}
