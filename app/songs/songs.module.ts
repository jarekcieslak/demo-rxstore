import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { SongsFavouritesComponent } from "./components/songs-favourites/songs-favourites.component";
import { SongsPlaylistComponent } from "./components/songs-playlist/songs-playlist.component";
import { SongsListenedComponent } from "./components/songs-listened/songs-listened.component";
import { CommonModule } from "@angular/common";
import { SongsService } from "./services/songs.service";
import { SongsListComponent } from "./components/songs-list/songs-list.component";

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        SongsFavouritesComponent,
        SongsPlaylistComponent,
        SongsListenedComponent,
        SongsListComponent
    ],
    providers: [
        SongsService
    ],
    exports: [
        SongsFavouritesComponent,
        SongsPlaylistComponent,
        SongsListenedComponent
    ]

})
export class SongsModule {
}