import { Component } from '@angular/core';

import { Store } from './store';
import { Todo } from "./state.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    public todos$ = this.store.select<Todo[]>('todos');

    constructor(private store: Store) {

        const todos: Todo[] =
            [
                { id: 1, name: 'Eat dinner' },
                { id: 2, name: 'Do washing' }
            ];

        this.store.set('todos', todos);
    }

}
