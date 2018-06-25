import { Action } from '@ngrx/store';

import { Video } from '../../models/video.model';

export const GET_VIDEOS: string = 'GET_VIDEOS';
export const GET_VIDEOS_SUCCES: string = 'GET_VIDEOS_SUCCES';
export const GET_VIDEOS_ERROR: string = 'GET_VIDEOS_ERROR';

// Get
export class GetVideos implements Action {
  readonly type: string = GET_VIDEOS;

  // to avoid error 'property payload does not exist on type Action';
  constructor( public payload?: any ) { }
}

export class GetVideosSuccess implements Action {
  readonly type: string = GET_VIDEOS_SUCCES;
  constructor( public payload: Video[] ) {}
}

export class GetVideosError implements Action {
  readonly type: string = GET_VIDEOS_ERROR;
  constructor( public payload: any) {}
}

// Select
export const TOGGLE_SELECT_MODE: string = 'TOGGLE_SELECT_MODE';
export const SELECT_VIDEOS: string = 'SELECT_VIDEOS';

export class ToggleSelectMode implements Action {
  readonly type: string = TOGGLE_SELECT_MODE;
  constructor( public payload: boolean ) {}
}

export class SelectVideos implements Action {
  readonly type: string = SELECT_VIDEOS;
  constructor( public payload: Video[]) {}
}

export type VideosAcitons =
 | GetVideos
 | GetVideosSuccess
 | GetVideosError
 | ToggleSelectMode
 | SelectVideos;
