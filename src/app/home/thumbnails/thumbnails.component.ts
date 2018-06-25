import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'app-thumbnails',
    templateUrl: './thumbnails.component.html',
    styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params.value;
    }

    refresh(): boolean {
        return false;
    }

}
