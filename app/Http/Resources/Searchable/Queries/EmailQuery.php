<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{
    ConditionalQuery,
    ValidatableQuery
};

class EmailQuery extends AbstractQuery implements ConditionalQuery, ValidatableQuery
{
    protected string $field = 'email';
    protected string $attribute = 'email';

    public function applies(): bool
    {
        return parent::applies();
    }

    public function rules(): array
    {
        return [
            [$this->field => 'sometimes|string|email|max:255'],
        ];
    }
}
