# Controllers

> /resources/js/Controllers

Controllers are auto-loaded into the container and are where the core logic of the 
application should reside. Just like our Laravel PHP backend, we can extend the 
base `Controller` to have helper methods available.  (Recommended)

```javascript
//Global Vue Component Scope:
const controller = this.$app.make('MyController')
```

## Implementation

```javascript
"use strict";
import Controller from "../Services/Store/Controller"
export default class MyController extends Controller {

    constructor(App) {
        super(App)
    }

    get schema() {
        return {
            entity: null,
        }
    }

    async update({id, ...params}) {

        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'account.update')

            const {data} = await this.$http.put(`/api/users/${id}`, params)

            await this.$state
                .update(data)
                .forget('loading')

        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }
}
```

## Base Controller Source

[Controller.js](https://raw.githubusercontent.com/bayareawebpro/laravel-micro-spa-boilerplate/master/resources/js/Services/Store/Controller.js ':include :type=code')
