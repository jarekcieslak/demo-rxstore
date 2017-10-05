import { SongsListenedComponent } from "./../songs-listened/songs-listened.component";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";
import { Song } from "../../../state.model";

@Component({
    selector: 'songs-list',
    styleUrls: ['songs-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="songs-list">
        <h3><ng-content></ng-content></h3>
        <ul>
            <li *ngFor="let item of list; index as i">
                <p> {{item.artist}}</p>
                <span>{{item.track}}</span>
                {{item.favourite}}
                <div class="songs-list__favourite"
                    (click)="toggleItem(i, 'favourite')"
                    [class.active]="item.favourite">
                </div>
                <div class="songs-list__listened"
                    (click)="toggleItem(i, 'listened')"
                    [class.active]="item.listened">
                </div>
            </li>
        </ul>
        </div>
    `
})
export class SongsListComponent {

    @Input()
    list: Song[];

    @Output()
    toggle: EventEmitter<any> = new EventEmitter<any>();

    public toggleItem(index: number, prop: string) {
        const track = this.list[index];
        this.toggle.emit({
            track: {
                ...track,
                [prop]: !track[prop]
            }
        })
    }

}