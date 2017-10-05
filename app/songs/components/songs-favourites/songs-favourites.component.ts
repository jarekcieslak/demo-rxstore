import {Component, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {Playlist} from "../../../state.model";

@Component({
    selector: 'songs-favourites',
    template: `
        <div class="songs">
            Favourites
            <div *ngFor="let item of (favourites$ | async)">
                {{item.artist}}
                {{item.track}}
            </div>
        </div>
    `
})
export class SongsFavouritesComponent implements OnInit {

    public favourites$;

    constructor(private store: Store) {

    }

    public ngOnInit() {

        this.favourites$ = this.store.select<Playlist[]>('playlist')
            .filter(data => !!data)
            .map(data => data.filter(item => item.favourite))


    }
}