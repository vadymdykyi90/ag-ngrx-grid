import * as fromVideos from './videos.reducer';
import * as fromActions from '../actions/videos.actions';
import { Video } from './../../models/video.model';

describe('VideosReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromVideos;
      const action = {} as any;
      const state = fromVideos.reducer(undefined, action)

      expect(state).toBe(initialState);
    })
  });

  describe('GET_VIDEOS action', () => {
    it('should set pending to true', () => {
      const { initialState } = fromVideos;
      const action = new fromActions.GetVideos();
      const state = fromVideos.reducer(initialState, action);

      expect(state.pending).toEqual(true);
      expect(state.error).toBeNull();
      expect(state.videos).toEqual([]);
      expect(state.selected).toEqual([]);
      expect(state.totalCount).toEqual(0);
      expect(state.selectedCount).toEqual(0);
    });
  });

  describe('GET_VIDEOS_SUCCESS action', () => {
    it('should populate the videos array and set totalCount', () => {
      const videos: Video[] = [
        {
          kind: 'youtube#searchResult',
          etag: '\'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\'',
          id: {
            kind: 'youtube#video',
            videoId: '3fumBcKC6RE'
          },
          snippet: {
            publishedAt: '2011-05-12T20:01:31.000Z',
            channelId: 'UCEOhcOACopL42xyOBIv1ekg',
            title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
            description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'LilWayneVEVO',
            liveBroadcastContent: 'none'
          }
        },
        {
          kind: 'youtube#searchResult',
          etag: '\'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\'',
          id: {
            kind: 'youtube#video',
            videoId: '4fumBcKC6RE'
          },
          snippet: {
            publishedAt: '2011-05-12T20:01:31.000Z',
            channelId: 'UCEOhcOACopL42xyOBIv1ekg',
            title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
            description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'LilWayneVEVO',
            liveBroadcastContent: 'none'
          }
        }
      ];

      const { initialState } = fromVideos;
      const action = new fromActions.GetVideosSuccess(videos);
      const state = fromVideos.reducer(initialState, action);

      expect(state.pending).toEqual(false);
      expect(state.error).toBeNull();
      expect(state.videos).toEqual(videos);
      expect(state.totalCount).toEqual(videos.length);
    });
  });

  describe('GET_VIDEOS_FAIL action', () => {
    it('should return set the error', () => {
      const { initialState } = fromVideos;
      const action = new fromActions.GetVideosError({});
      const state = fromVideos.reducer(initialState, action);

      expect(state.error).toEqual('Error');
    });
  });

  describe('TOGGLE_SELECT_MODE action', () => {
    it('should return boolean falue', () => {
      const { initialState } = fromVideos;
      const oppositeValue = !initialState.selectMode;
      const action = new fromActions.ToggleSelectMode(oppositeValue);
      const state = fromVideos.reducer(initialState, action);

      expect(state.selectMode).toEqual(oppositeValue);
    });
  });

  describe('SELECT_VIDEOS action', () => {
    it('should populate the selected array and set selectedCount', () => {
      const videos: Video[] = [
        {
          kind: 'youtube#searchResult',
          etag: '\'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\'',
          id: {
            kind: 'youtube#video',
            videoId: '3fumBcKC6RE'
          },
          snippet: {
            publishedAt: '2011-05-12T20:01:31.000Z',
            channelId: 'UCEOhcOACopL42xyOBIv1ekg',
            title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
            description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'LilWayneVEVO',
            liveBroadcastContent: 'none'
          }
        },
        {
          kind: 'youtube#searchResult',
          etag: '\'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\'',
          id: {
            kind: 'youtube#video',
            videoId: '4fumBcKC6RE'
          },
          snippet: {
            publishedAt: '2011-05-12T20:01:31.000Z',
            channelId: 'UCEOhcOACopL42xyOBIv1ekg',
            title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
            description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'LilWayneVEVO',
            liveBroadcastContent: 'none'
          }
        }
      ];

      const { initialState } = fromVideos;
      const action = new fromActions.SelectVideos(videos);
      const state = fromVideos.reducer(initialState, action);

      expect(state.pending).toEqual(false);
      expect(state.error).toBeNull();
      expect(state.selected).toEqual(videos);
      expect(state.selectedCount).toEqual(videos.length);
    });

    describe('Videos Reducer Selectors', () => {
      describe('getVideosState', () => {
        it('should return VideosState', () => {
          const {initialState } = fromVideos;
          const prevState = { ...initialState }
          const slice = fromVideos.getVideosState({reducer: prevState});

          expect(slice).toEqual(initialState);
        })
      });

    });
  });

});