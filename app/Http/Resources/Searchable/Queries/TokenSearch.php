<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{ConditionalQuery, ProvidesOptions, ValidatableQuery};

class TokenSearch extends AbstractQuery implements ConditionalQuery, ValidatableQuery
{
    protected string $field = 'search';
    protected string $attribute = 'search';

    public function __invoke(Builder $builder): void
    {
        $value = $this->getValue();

        $builder
            ->where(fn(Builder $builder) => $builder
                ->where('name', 'like', "%$value%")
                ->orWhere('abilities', 'like', "%$value%")
                ->orWhere('created_at', 'like', "%$value%")
                ->orWhere('updated_at', 'like', "%$value%")
                ->orWhere('updated_at', 'like', "%$value%")
                ->orWhereHasMorph('tokenable', [User::class],
                    fn(Builder $builder) => $builder->where('name', 'like', "%$value%")
                )
            );
    }
}
