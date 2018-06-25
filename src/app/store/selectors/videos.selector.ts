import { createSelector } from '@ngrx/store';

import * as fromVideos from '../reducers';

export const getVideos: any = createSelector(
  fromVideos.getVideosState,
  (state: fromVideos.VideosState) => state.videos
);

export const getSelectMode: any = createSelector(
  fromVideos.getVideosState,
  (state: fromVideos.VideosState) => state.selectMode
);

export const getVideosCount: any = createSelector(
  fromVideos.getVideosState,
  (state: fromVideos.VideosState) => state.totalCount
);

export const getSelectedVideosCount: any = createSelector(
  fromVideos.getVideosState,
  (state: any) => state.selectedCount
);
