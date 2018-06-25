import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-video-title',
    templateUrl: './video-title.component.html',
    styleUrls: ['./video-title.component.css']
})
export class VideoTitleComponent implements ICellRendererAngularComp {
    public params: any;
    public urlVideo: string = environment.urlVideo;

    agInit(params: any): void {
        this.params = params.data;
    }

    refresh(): boolean {
        return false;
    }

}
