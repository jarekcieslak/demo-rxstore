import { Component, OnInit } from "@angular/core";
import { Store } from "../../../store";
import { Playlist } from "../../../state.model";

@Component({
    selector: 'songs-favourites',
    template: `
        <div class="songs">
            <songs-list
            [list]="(favourites$ | async)" >
                Favourites
            </songs-list>
        </div>
    `
})
export class SongsFavouritesComponent implements OnInit {

    public favourites$;

    constructor(private store: Store) {

    }

    public ngOnInit() {

        this.favourites$ = this.store.select<Playlist[]>('playlist')
            .filter(Boolean)
            .map(data => data.filter(item => item.favourite))


    }
}