<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use App\Models\ApiToken;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Cache;

use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{ConditionalQuery, ProvidesOptions, ValidatableQuery};

class TokenAbility extends AbstractQuery implements ConditionalQuery, ValidatableQuery, ProvidesOptions{

    protected string $field = 'abilities';
    protected string $attribute = 'abilities';

    /**
     * Invokable Query
     * @param Builder $builder
     */
    public function __invoke(Builder $builder): void
    {
        $builder->where($this->attribute, 'like', "%{$this->getValue()}%");
    }

    /**
     * Get unique list of AirLock token abilities from all tokens created.
     */
    protected function getValues(): array
    {
        return Cache::remember('airlock:abilities', 120,
            fn()=>ApiToken::allAbilities()->toArray()
        );
    }

    /**
     * Provides Options
     */
    public function getOptions(): array
    {
        return [
            $this->field => $this->getValues()
        ];
    }

    /**
     * Validatable Query
     */
    public function getRules(): array
    {
        return [
            $this->field => [
                'sometimes', 'nullable', 'string', Rule::in($this->getValues())
            ],
        ];
    }
}
