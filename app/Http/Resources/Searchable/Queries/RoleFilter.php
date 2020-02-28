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
        return User::allRoles()->pluck('value')->toArray();
    }

    /**
     * Provides Options
     */
    public function getOptions(): array
    {
        return [
            $this->field => $this->values()
        ];
    }

    /**
     * Conditional Query
     * @return bool
     */
    public function getApplies(): bool
    {
        return $this->request->filled($this->field);
    }

    /**
     * Validatable Query
     */
    public function getRules(): array
    {
        return [
            $this->field => [
                'sometimes', 'nullable', 'string', Rule::in($this->values())
            ],
        ];
    }
}
