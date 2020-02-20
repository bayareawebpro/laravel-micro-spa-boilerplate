<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use App\Models\User;
use Illuminate\Validation\Rule;
use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{ConditionalQuery, ProvidesOptions, ValidatableQuery};

class RoleFilter extends AbstractQuery implements ConditionalQuery, ValidatableQuery, ProvidesOptions
{
    protected string $field = 'role';
    protected string $attribute = 'role';

    /**
     * Get unique list of roles from all Users created.
     */
    protected function values(): array
    {
        return User::allRoles()->toArray();
    }

    /**
     * Provides Options
     */
    public function options(): array
    {
        return [
            $this->field => $this->values()
        ];
    }

    /**
     * Validatable Query
     */
    public function rules(): array
    {
        return [
            [
                $this->field => [
                    'sometimes', 'nullable', 'string', Rule::in($this->values())
                ]
            ],
        ];
    }
}
