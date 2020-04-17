<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{ConditionalQuery, ProvidesOptions, ValidatableQuery};

class TokenSearch extends AbstractQuery implements ConditionalQuery, ValidatableQuery
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
    protected string $attribute = 'search';

    /**
     * Apply Query to Builder
     * @param Builder $builder
     * @return void
     */
    public function __invoke(Builder $builder): void
    {
        $value = $this->getValue();

        $builder
            ->where(fn(Builder $builder) => $builder
                ->where('name', 'like', "%$value%")
                ->orWhere('abilities', 'like', "%$value%")
                ->orWhereHasMorph('tokenable', [User::class],
                    fn(Builder $builder) => $builder->where('name', 'like', "%$value%")
                )
            );
    }

    /**
     * Request Validation Rules
     * @return array
     */
    public function getRules(): array
    {
        return [
            $this->field => 'sometimes|string|max:255'
        ];
    }
}
