import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "../../../store";
import { SongsService } from "../../services/songs.service";
import 'rxjs/add/operator/first'
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'songs-playlist',
    template: `
    
        <div class="songs">
            <songs-list
                (toggle)="onToggle($event)"
                [list]="(playlist$ | async)" >
            Playlist
            </songs-list>
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
            // This triggers getPlaylist
            this.songsService.getPlaylist$.subscribe()
        );

        this.playlist$ = this.store.select('playlist')
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public onToggle($event: any) {
        this.songsService.toggle($event);
    }
}