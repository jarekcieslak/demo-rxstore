import { Playlist } from "./../../state.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Store } from "../../store";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SongsService {

    getPlaylist$: Observable<any> = this.http
        .get('/api/playlist')
        .map(response => response.json())
        .do(next => this.store.set('playlist', next));

    public toggle($event: any) {
        return this.http.put(`/api/playlist/${$event.track.id}`, $event.track)
            .map(response => response.json())
            .subscribe(data => {
                const value = this.store.value.playlist;
                const playlist = value.map(
                    song => {
                        if (song.id === $event.track.id) {
                            return { ...song, ...$event.track }
                        } else {
                            return song
                        }
                    }
                )
                this.store.set('playlist', playlist);

            })
    }

    public constructor(private http: Http, private store: Store) {

    }
}
