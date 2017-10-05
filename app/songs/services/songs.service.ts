import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Store} from "../../store";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SongsService {

    getPlaylist$: Observable<any> = this.http
        .get('/api/playlist')
        .map(response => response.json())
        .do(next => this.store.set('playlist', next));

    public constructor(private http: Http, private store: Store) {

    }
}