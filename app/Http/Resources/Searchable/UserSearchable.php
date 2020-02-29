<?php

namespace App\Http\Resources\Searchable;

use App\Http\Resources\Searchable\Queries\NameQuery;
use App\Http\Resources\Searchable\Queries\RoleFilter;
use BayAreaWebPro\SearchableResource\SearchableBuilder;
use BayAreaWebPro\SearchableResource\Contracts\InvokableBuilder;

class UserSearchable implements InvokableBuilder
{
    public function __invoke(SearchableBuilder $builder): void
    {
        $builder->queries([
            NameQuery::class,
            RoleFilter::class,
        ]);

        $builder
            ->orderBy('name')
            ->orderable([
                'name',
                'email',
                'role',
            ]);
    }
}
