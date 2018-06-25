import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid/grid.component';
import { VideoTitleComponent } from './video-title/video-title.component';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from '../store/reducers/videos.reducer';
import { VideosEffects } from '../store/effects/videos.effects';

import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PublicationTimeComponent } from './publication-time/publication-time.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    StoreModule.forRoot({ reducer }),
    EffectsModule.forRoot([VideosEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AgGridModule.withComponents([
      GridComponent,
      VideoTitleComponent,
      PublicationTimeComponent,
      ThumbnailsComponent,
      DescriptionComponent
    ]),
  ],
  declarations: [
    GridComponent,
    VideoTitleComponent,
    PublicationTimeComponent,
    ThumbnailsComponent,
    DescriptionComponent
  ]
})
export class HomeModule { }
