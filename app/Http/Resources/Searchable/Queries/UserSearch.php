<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use Illuminate\Database\Eloquent\Builder;
use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\ConditionalQuery;

class UserSearch extends AbstractQuery implements ConditionalQuery
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

    public function applies(): bool
    {
        return parent::applies();
    }

    public function rules(): array
    {
        return [
            [$this->field => 'sometimes|string|max:255'],
        ];
    }

}
