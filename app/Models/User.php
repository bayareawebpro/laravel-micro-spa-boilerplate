<?php

namespace App\Models;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

use Illuminate\Validation\Rule;
use App\Models\Contracts\Validateable;

use Laravel\Airlock\HasApiTokens;
use Illuminate\Notifications\Notifiable;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class User extends Authenticatable implements Validateable
{
    use Notifiable, HasApiTokens;

    protected $attributes = [
        'role' => 'guest',
    ];

    protected $fillable = [
        'name', 'email', 'password', 'attachment', 'attachments'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $with = [
        //'attachment',
        'attachments',
        'tokens',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function attachment(){
        return $this->morphOne(Attachment::class, 'attachable');
    }

    public function attachments(){
        return $this->morphMany(Attachment::class, 'attachable');
    }

    public function setAttachmentAttribute($value)
    {
        if(isset($value['id'])){
            $this->attachment()->save(Attachment::findOrFail($value['id']));
        }
    }

    public function setAttachmentsAttribute($values)
    {
        if(is_array($values) && !empty($values)){
            $this->attachment()->saveMany(
                Attachment::whereIn('id', Arr::pluck($values, 'id'))->get()
            );
        }
    }

    /**
     * Does the user have a specific role.
     * @param string ...$roles
     * @return bool
     */
    public function isRole(...$roles): bool
    {
        return in_array($this->role, $roles);
    }

    /**
     * Grant the user a specific role.
     * @param string $role
     * @return bool
     */
    public function grantRole($role): bool
    {
        $this->setAttribute('role', $role);
        return $this->save();
    }

    /**
     * Get all the user roles in use.
     * @return Collection
     */
    public static function allRoles(): Collection
    {
        return Collection::make([
            ['label' => 'Administrator', 'value' => 'admin'],
            ['label' => 'Editor', 'value' => 'editor'],
            ['label' => 'Guest', 'value' => 'guest'],
        ]);
    }

    /**
     * Clear the relevant cached attributes.
     * @return Collection
     */
    public static function boot(): void
    {
        parent::boot();
        static::saved(fn() => Cache::forget('user:roles'));
        static::deleted(fn() => Cache::forget('user:roles'));
    }

    /**
     * The validation rules for an entity.
     * @param User|null $user
     * @return array
     */
    public static function validationRules(?User $user = null): array
    {
        return [
            'name'                  => ['required', 'string', 'max:255'],
            'password'              => ['sometimes', 'nullable', 'string', 'min:8', 'confirmed'],
            'password_confirmation' => ['sometimes', 'nullable', 'string', 'min:8'],
            'role'                  => ['sometimes', 'required', 'string', Rule::in(static::allRoles()->pluck('value'))],

            'attachment'            => ['sometimes', 'nullable', 'array'],
            'attachment.id'         => ['numeric', 'exists:attachments,id'],

            'attachments'            => ['sometimes', 'nullable', 'array'],
            'attachments.*.id'       => ['numeric', 'exists:attachments,id'],

            'email'                 => [
                'required', 'string', 'email', 'max:255',
                //Rule::unique('users')->ignore(optional($user)->id),
            ],
        ];
    }
}
