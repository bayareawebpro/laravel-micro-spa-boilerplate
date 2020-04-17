<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use App\Models\ApiToken;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Cache;

use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{ConditionalQuery, ProvidesOptions, ValidatableQuery};

class TokenAbility extends AbstractQuery implements ConditionalQuery, ValidatableQuery, ProvidesOptions{

    /**
     * Request Input Field Name.
     * @return array
     */
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
     * Get unique list of abilities from all tokens in use.
     * @return array
     */
    protected function getValues(): array
    {
        return Cache::remember('sanctum:abilities', 120,
            fn()=>ApiToken::allAbilities()->toArray()
        );
    }

    /**
     * Provides Options
     * @return array
     */
    public function getOptions(): array
    {
        return [
            $this->field => $this->getValues()
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
                'sometimes',
                'nullable',
                'string',
                Rule::in($this->getValues())
            ],
        ];
    }
}
