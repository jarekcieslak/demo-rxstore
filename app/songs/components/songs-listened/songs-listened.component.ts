import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {SongsService} from "../../services/songs.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import {Playlist} from "../../../state.model";

@Component({
    selector: 'songs-listened',
    template: `
        <div class="songs">
            Listened
            <div *ngFor="let item of (listened$ | async)">
                {{item.artist}}
                {{item.track}}
                
            </div>
        </div>
    `
})
export class SongsListenedComponent implements OnInit {

    listened$: Observable<Playlist[]>;


    constructor(private store: Store, private songsService: SongsService) {

    }

    public ngOnInit() {
        this.listened$ = this.store.select<Playlist[]>('playlist')
            .filter(data => !!data)
            .map(data => data.filter(item => item.listened))
    }
}