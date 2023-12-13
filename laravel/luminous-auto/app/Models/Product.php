<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'yearofmanufacture',
        'brand',
        'model',
        'fueltype',
        'mileage',
        'enginecc',
        'price',
        'description',
        'images'
    ];

    protected $casts = [
        'images' => 'array'
    ];

    // public function images(): HasMany
    // {
    //     return $this->hasMany(Image::class);
    // }
}
