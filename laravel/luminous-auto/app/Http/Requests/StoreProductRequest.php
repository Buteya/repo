<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Product;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'yearofmanufacture' => 'required|string|max:250',
            'brand' => 'required|string|max:250',
            'model' => 'required|string|max:250',
            'fueltype' => 'required|string|max:250',
            'mileage' => 'required|string|max:250',
            'enginecc' => 'required|string|max:250',
            'price' => 'required|string|max:250',
            'description' => 'required|string'
            // 'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ];
    }

    // public function product()
    // {
    //     // If the route has a product parameter, get the existing product model instance
    //     if ($this->route('product')) {
    //         return $this->route('product');
    //     }

    //     // Otherwise, return a new product model instance
    //     return new Product();
    // }

}