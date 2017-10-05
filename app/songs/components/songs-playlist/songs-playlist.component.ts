import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "../../../store";
import {SongsService} from "../../services/songs.service";
import 'rxjs/add/operator/first'
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'songs-playlist',
    template: `
        Playlist
        <div class="songs">
            <div *ngFor="let item of (playlist$ | async)">
                {{item.artist}}
                {{item.track}}
            </div>
        </div>
    `
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {

    public playlist$;
    public subscription: Subscription = new Subscription();

    constructor(private store: Store, private songsService: SongsService) {

    }

    public ngOnInit() {
        this.subscription.add(
            this.songsService.getPlaylist$.subscribe(data => data)
        );

        this.playlist$ = this.store.select('playlist')
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}