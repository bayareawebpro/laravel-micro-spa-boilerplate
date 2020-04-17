<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use Illuminate\Database\Eloquent\Builder;
use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\ConditionalQuery;
use BayAreaWebPro\SearchableResource\Contracts\ValidatableQuery;

class UserSearch extends AbstractQuery implements ConditionalQuery, ValidatableQuery
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
    protected string $attribute = '';

    /**
     * Apply Query to Builder
     * @param Builder $builder
     * @return void
     */
    public function __invoke(Builder $builder): void
    {
        $value = $this->getValue();

        // Wrap the "where" statements to prevent "or" clause redirection.
        $builder->where(fn(Builder $builder) => $builder
            ->where('name', 'like', "%$value%")
            ->orWhere('email', 'like', "%$value%")
        );
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
