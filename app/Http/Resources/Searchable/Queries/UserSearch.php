<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use Illuminate\Database\Eloquent\Builder;
use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\ConditionalQuery;
use BayAreaWebPro\SearchableResource\Contracts\ValidatableQuery;

class UserSearch extends AbstractQuery implements ConditionalQuery, ValidatableQuery
{
    protected string $field = 'search';

    public function __invoke(Builder $builder): void
    {
        $value = $this->getValue();
        $builder->where(fn(Builder $builder) => $builder
            ->where('name', 'like', "%$value%")
            ->orWhere('email', 'like', "%$value%")
        );
    }

    public function getRules(): array
    {
        return [
            $this->field => 'sometimes|string|max:255',
        ];
    }

}
