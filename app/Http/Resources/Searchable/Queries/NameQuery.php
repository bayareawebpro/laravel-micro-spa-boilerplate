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
    protected string $field = 'search';
    protected string $attribute = 'name';

    public function __invoke(Builder $builder): void
    {
        $builder->where($this->getAttribute(), 'like', "%{$this->getValue()}%");
    }

    public function rules(): array
    {
        return [
            [$this->field => 'sometimes|string|max:255'],
        ];
    }
}
