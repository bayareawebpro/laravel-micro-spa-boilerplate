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

    public function attachable(){
        return $this->morphTo('attachable');
    }

    /**
     * Get the storage path attribute.
     * @return string|null
     */
    public function getPathAttribute()
    {
        if(isset($this->attributes['name'])){
            return collect([
                "attachments",
                $this->attributes['name'],
            ])->join('/');
        }
    }

    /**
     * Get the storage path attribute.
     * @return string|null
     */
    public function getUrlAttribute()
    {
        if(isset($this->attributes['name'])){
            return asset("storage/{$this->path}");
        }
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
     * @return array
     */
    public static function validationRules(): array
    {
        return [
            'file' =>[
                'mimes:txt,png,jpg,jpeg,gif,bmp,webp,mov,mp4,qt', 'max:500000',
            ]
        ];
    }
}
