<?php

namespace App\Http\Requests;

use App\Rules\RoleExists;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * @return bool
     */
    public function authorize()
    {
        return !is_null($this->user());
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array
     */
    public function rules()
    {
        return [
            'name'                  => [
                'required', 'string', 'max:255'
            ],
            'password'              => [
               Rule::requiredIf($this->routeIs('users.store')),
               'string', 'min:8', 'confirmed'
            ],
            'password_confirmation' => [
                'required_with:password',  'string', 'min:8'
            ],
            'role'                  => [
                'sometimes', 'string', new RoleExists()
            ],
            'email'                 => [
                'required', 'string', 'email', 'max:255',
                Rule::unique('users')->ignore($this->route('user')),
            ],
        ];
    }
}
