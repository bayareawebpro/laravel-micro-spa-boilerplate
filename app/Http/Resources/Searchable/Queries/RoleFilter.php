<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use App\Services\UserRoles;
use Illuminate\Validation\Rule;
use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{
    ConditionalQuery, ProvidesOptions, ValidatableQuery
};

class RoleFilter extends AbstractQuery implements ConditionalQuery, ValidatableQuery, ProvidesOptions
{
    /**
     * Request Input Field Name.
     * @return array
     */
    protected string $field = 'role';

    /**
     * Database / Model Attribute Name.
     * @return array
     */
    protected string $attribute = 'role';

    /**
     * Get unique list of roles from all Users created.
     * @return array
     */
    protected function values(): array
    {
        return UserRoles::values()->toArray();
    }

    /**
     * Provides Options
     * @return array
     */
    public function getOptions(): array
    {
        return [
            $this->field => $this->values()
        ];
    }

    /**
     * Request Validation Rules
     * @return array
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
