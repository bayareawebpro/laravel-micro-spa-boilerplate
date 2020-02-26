<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable;

use BayAreaWebPro\SearchableResource\Contracts\InvokableBuilder;
use BayAreaWebPro\SearchableResource\SearchableBuilder;

class AttachmentsSearchable implements InvokableBuilder
{
    /**
     * InvokableBuilder
     * @param SearchableBuilder $builder
     */
    public function __invoke(SearchableBuilder $builder): void
    {
        $builder
            ->orderBy('name')
            ->orderable([
                'name',
                'mime',
                'user_id',
            ]);
    }
}
