import * as fromVideos from '../actions/videos.actions';
import { Video } from './../../models/video.model';

export interface VideosState {
  videos: Video[];
  selected: Video[];
  selectMode: boolean;
  totalCount: number;
  selectedCount: number;
  pending: boolean;
  error: any;
}


export const initialState: VideosState = {
  videos: [],
  selected: [],
  selectMode: false,
  totalCount: 0,
  selectedCount: 0,
  pending: false,
  error: null
};

export function reducer(
  state: VideosState = initialState,
  action: fromVideos.VideosAcitons
): VideosState {
  switch (action.type) {

    case fromVideos.GET_VIDEOS:
      return Object.assign({}, state, { pending: true, error: null });

    case fromVideos.GET_VIDEOS_SUCCES:
      const videos: Video[] = action.payload;

      return Object.assign({}, state, { videos, pending: false, totalCount: videos.length });

    case fromVideos.GET_VIDEOS_ERROR:
      return Object.assign({}, state, { pending: false, error: 'Error' });

    case fromVideos.SELECT_VIDEOS:
      const selected: Video[] = action.payload;

      return Object.assign({}, state, { selected, selectedCount: selected.length });

    case fromVideos.TOGGLE_SELECT_MODE:

      return Object.assign({}, state, { selectMode: action.payload });

    default:
      return state;
  }
}

export const getVideosState: any = (state: { reducer: VideosState } ) => state.reducer;
