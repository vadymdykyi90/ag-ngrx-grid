import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
import * as videosActions from '../actions/videos.actions';


@Injectable({
  providedIn: 'root'
})
export class VideosEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService) { }

  @Effect()
  getVideos$: Observable<Action> = this.actions$.ofType(videosActions.GET_VIDEOS).pipe(
    switchMap(() => this.apiService
      .getData()
      .pipe(
        map((response: any) => new videosActions.GetVideosSuccess(response.items)),
        catchError((error: Error) => of(new videosActions.GetVideosError(error)))
      )
     )
  );
}
