<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Queries;

use BayAreaWebPro\SearchableResource\AbstractQuery;
use BayAreaWebPro\SearchableResource\Contracts\{
    ConditionalQuery,
    ValidatableQuery
};

class EmailQuery extends AbstractQuery implements ConditionalQuery, ValidatableQuery
{
    /**
     * Request Input Field Name.
     * @return array
     */
    protected string $field = 'email';

    /**
     * Database / Model Attribute Name.
     * @return array
     */
    protected string $attribute = 'email';

    /**
     * Request Validation Rules
     * @return array
     */
    public function getRules(): array
    {
        return [
            $this->field => 'sometimes|string|email|max:255',
        ];
    }
}
