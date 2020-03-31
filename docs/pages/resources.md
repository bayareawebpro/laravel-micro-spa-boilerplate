# Searchable Resource Builder

This package is designed to make building searchable, sortable & filterable resource indexes by extracting resusable queries and using a method chained builder class for composition.  Requests are validated and responses are JsonResource classes. Frontend JS Controllers & Vue.js components are provided that interface with these responses.

> https://github.com/bayareawebpro/searchable-resource

### Extend the Resource Class

A pre-written Resource Class is available for the 80% use-case.

> See: `Services/Store/Resource`

[filename](_examples/resource-extend.js ':include :type=code')

### Write your own implementation:

> Extend `Services/Store/Controller` and implement the required methods.

[filename](https://raw.githubusercontent.com/bayareawebpro/laravel-micro-spa-boilerplate/master/resources/js/Services/Store/Resource.js ':include :type=code')

---
