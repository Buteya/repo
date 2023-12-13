<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        // 'title',
        'product_id',
        'images'
    ];

    protected $casts = [
        'images' => 'array'
    ];

    public function product() : BelongsTo
    {
        return $this->belongsTo(Product::class.'foreign_key');
    }
}
