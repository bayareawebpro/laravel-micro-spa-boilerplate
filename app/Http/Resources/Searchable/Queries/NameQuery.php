<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{
    ConditionalQuery,
    ValidatableQuery
};
use Illuminate\Database\Eloquent\Builder;

class NameQuery extends AbstractQuery implements ConditionalQuery, ValidatableQuery
{
    /**
     * Request Input Field Name.
     * @return array
     */
    protected string $field = 'search';

    /**
     * Database / Model Attribute Name.
     * @return array
     */
    protected string $attribute = 'name';

    /**
     * Apply Query to Builder
     * @param Builder $builder
     * @return void
     */
    public function __invoke(Builder $builder): void
    {
        $builder->where($this->getAttribute(), 'like', "%{$this->getValue()}%");
    }

    /**
     * Request Validation Rules
     * @return array
     */
    public function getRules(): array
    {
        return [
            $this->field => 'sometimes|string|max:255',
        ];
    }
}
