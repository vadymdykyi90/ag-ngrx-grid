import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GridOptions } from 'ag-grid';

import { Video } from '../../models/video.model';

import * as fromStore from '../../store';

import { VideoTitleComponent } from '../video-title/video-title.component';
import { PublicationTimeComponent } from '../publication-time/publication-time.component';
import { ThumbnailsComponent } from '../thumbnails/thumbnails.component';
import { DescriptionComponent } from '../description/description.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  videos$: Observable<Video[]>;
  selectedCount$: Observable<number>;
  totalCount$: Observable<number>;
  isSelecting$: Observable<boolean>;

  gridOptions: GridOptions;
  rowData: Video[];

  gridApi: any;
  gridColumnApi: any;
  show: boolean;

  onGridReady = (params: any): void => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnVisible('checkBox', this.show);
  }

  constructor(private store: Store<fromStore.VideosState>) { }

  ngOnInit(): void {
    this.getFromStore();
  }

  initGrid(): void {
    this.gridOptions = {
      rowSelection: 'multiple',
      rowHeight: 90,
      suppressRowClickSelection: true,
      allowContextMenuWithControlKey: true,
      getContextMenuItems: this.getContextMenuItems,
      columnDefs: [
        {
          headerName: '',
          headerCheckboxSelection: true,
          checkboxSelection: true,
          width: 50,
          colId: 'checkBox',
          hide: this.show
        },
        {
          headerName: '',
          field: 'snippet.thumbnails.default',
          autoHeight: true,
          cellRendererFramework: ThumbnailsComponent
        },
        {
          headerName: 'Published on',
          field: 'snippet.publishedAt',
          cellRendererFramework: PublicationTimeComponent
        },
        {
          headerName: 'Video Title',
          field: 'item',
          cellRendererFramework: VideoTitleComponent
        },
        {
          headerName: 'Description',
          field: 'snippet.description',
          cellRendererFramework: DescriptionComponent
        }
      ]
    };
  }

  showCheckBox(): void {
    this.store.dispatch(new fromStore.ToggleSelectMode(!this.show));
    this.gridColumnApi.setColumnVisible('checkBox', this.show);
  }

  getContextMenuItems(params: any): any {
    if (params.column.colDef.headerName === 'Video Title') {
      return [
        {
          name: `<a href="${environment.urlVideo +
            params.node.data.id.videoId}" target="_blank">Open in new tab</a>`
        }
      ];
    }
  }

  getFromStore(): void {
    this.store.dispatch(new fromStore.GetVideos());

    this.videos$ = this.store.select(fromStore.getVideos);
    this.totalCount$ = this.store.select(fromStore.getVideosCount);
    this.selectedCount$ = this.store.select(fromStore.getSelectedVideosCount);
    this.isSelecting$ = this.store.select(fromStore.getSelectMode);

    this.videos$.subscribe(
      (videos: Video[]) => this.rowData = videos,
      (error: Error) => console.error(error)
    );

    this.isSelecting$.subscribe(
      (isSelecting: boolean) => {
        this.show = isSelecting;
        this.initGrid();
      },
      (error: Error) => console.error(error)
    );
  }

  onSelectionChanged(): void {
    const selected: Video[] = this.gridApi.getSelectedRows();
    this.store.dispatch(new fromStore.SelectVideos(selected));
  }
}
