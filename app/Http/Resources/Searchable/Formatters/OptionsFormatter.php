<?php declare(strict_types=1);

namespace App\Http\Resources\Searchable\Formatters;

use BayAreaWebPro\SearchableResource\Contracts\FormatsOptions;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class OptionsFormatter implements FormatsOptions {

    public function __invoke(string $key, Collection $options): Collection
    {
        if($key === 'per_page'){
            return $this->append($options, "/ Page");
        }
        if($key === 'abilities'){
            return $this->nullable($this->literal($options));
        }
        if($key === 'role'){
            return $this->nullable($this->titleCase($options));
        }
        return $this->titleCase($options);
    }

    /**
     * @param Collection $options
     * @param string $append
     * @return Collection
     */
    protected function append(Collection $options, string $append): Collection
    {
        return $options->map(fn($value, $key)=>[
            'label' => "$value $append",
            'value' => $value,
        ]);
    }

    /**
     * @param Collection $options
     * @param string $label
     * @return Collection
     */
    protected function nullable(Collection $options, string $label = 'All'): Collection
    {
        return $options->prepend([
            'label' => $label,
            'value' => null,
        ]);
    }

    /**
     * @param Collection $options
     * @return Collection
     */
    protected function titleCase(Collection $options): Collection
    {
        return $options->map(fn($value, $key) => [
            'label' => Str::title(str_replace("_", " ", "$value")),
            'value' => $value,
        ]);
    }

    /**
     * @param Collection $options
     * @return Collection
     */
    protected function literal(Collection $options): Collection
    {
        return $options->map(fn($value, $key) => [
            'label' => $value,
            'value' => $value,
        ]);
    }
}
