<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable;

use App\Http\Resources\Searchable\Queries\TokenAbility;
use App\Http\Resources\Searchable\Queries\TokenSearch;
use App\Models\User;
use BayAreaWebPro\SearchableResource\SearchableBuilder;
use BayAreaWebPro\SearchableResource\Contracts\InvokableBuilder;

class TokenSearchable implements InvokableBuilder
{
    /**
     * InvokableBuilder
     * @param SearchableBuilder $builder
     */
    public function __invoke(SearchableBuilder $builder): void
    {
        $builder
            ->queries([
                TokenSearch::class,
                TokenAbility::class,
            ])
            ->orderable([
                'name',
                'tokenable_type',
                'last_used_at',
                'created_at',
            ])
            ->sort('desc')
            ->orderBy('created_at')
            ->paginate(4);
    }
}
