<?php

namespace App\Models;

use App\Models\Contracts\Validateable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class Attachment extends Model implements Validateable
{
    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'user_id',
        'size',
        'name',
        'mime',
    ];

    protected $appends = [
        'url',
    ];

    /**
     * Get the storage path attribute.
     * @return string|null
     */
    public function getPathAttribute()
    {
        return collect([
            "attachments",
            $this->attributes['user_id'] ?? null,
            $this->attributes['name'] ?? null,
        ])->reject(fn($val)=>empty($val))->join('/');
    }

    /**
     * Get the storage path attribute.
     * @return string|null
     */
    public function getUrlAttribute()
    {
        return asset("storage/{$this->path}");
    }

    /**
     * Boot Model Events.
     * @return void
     */
    public static function boot()
    {
        parent::boot();
        static::deleted(function(Attachment $model){
            Storage::disk('public')->delete($model->path);
        });
    }

    /**
     * The validation rules for an entity.
     * @param Attachment|null $model
     * @return array
     */
    public static function validationRules(?Attachment $model = null): array
    {
        return [
            'name'                  => ['sometimes','required', 'string', 'max:255'],
            'mime'                  => ['sometimes','required', 'string', 'max:255'],
            'size'                  => ['sometimes','required', 'numeric'],
            'file' =>[
                Rule::requiredIf(is_null($model)),
                'mimes:png,jpg,jpeg,gif,bmp,webp', 'max:10000',
            ]
        ];
    }
}
