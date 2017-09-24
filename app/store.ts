import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {State} from "./state.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';

const state: State = {
    playlist: undefined,
    todos: undefined
};


@Injectable()
export class Store {

    private subject: BehaviorSubject<State> = new BehaviorSubject(state);
    private store: Observable<State> = this.subject.asObservable().distinctUntilChanged();


    /**
     * Gets currenet value of the behavior subject
     * @returns {State}
     */
    get value(): State {
        return this.subject.value;
    }

    /**
     * Gets part of the state
     * @param {string} name
     * @returns {Observable<any>}
     */
    public select<T>(name: string): Observable<T> {
        return this.store.pluck(name);
    }

    /**
     * Sets part of the state
     * @param {string} name
     * @param state
     */
    public set(name: string, state: any) {
        this.subject.next({
            ...this.value,
            [name]: state
        });
    }

    constructor() {
    }


}

