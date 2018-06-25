import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-publication-time',
  templateUrl: './publication-time.component.html',
  styleUrls: ['./publication-time.component.css']
})
export class PublicationTimeComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = { date: new Date(params.value).toDateString() };
    }

    refresh(): boolean {
        return false;
    }

}
