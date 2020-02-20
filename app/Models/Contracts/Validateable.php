<?php

namespace App\Models\Contracts;
interface Validateable
{
    public static function validationRules(): array;
}
