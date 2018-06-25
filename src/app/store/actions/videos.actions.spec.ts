import * as fromVideos from './videos.actions';
import { Video } from '../../models/video.model';

describe('Videos Actions', () => {

  describe('GetVideos Actions', () => {

    describe('GetVideos', () => {
      it('should create an action', () => {
        const action = new fromVideos.GetVideos();

        expect({ ...action }).toEqual({
          type: fromVideos.GET_VIDEOS,
          payload: undefined
        });
      })
    });

    describe('GetVideosError', () => {
      it('should create an action', () => {
        const payload = { message: 'Error' };
        const action = new fromVideos.GetVideosError(payload);

        expect({ ...action }).toEqual({
          type: fromVideos.GET_VIDEOS_ERROR,
          payload
        });
      });
    });

    describe('GetVideosSuccess', () => {
      it('should create an action', () => {
        const payload: Video[] = [
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
          }
        ];

        const action = new fromVideos.GetVideosSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromVideos.GET_VIDEOS_SUCCES,
          payload
        });
      });
    });
  });

  describe('ToggleSelectMode Action', () => {
    describe('ToggleSelectMode', () => {
      it('should create an action', () => {
        const payload: boolean = true;

        const action = new fromVideos.ToggleSelectMode(payload);

        expect({ ...action }).toEqual({
          type: fromVideos.TOGGLE_SELECT_MODE,
          payload
        });
      });
    });
  });

  describe('SelectVideos Action', () => {
    describe('SelectVideos', () => {
      it('should create an action', () => {
        const payload: Video[] = [
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
          }
        ];

        const action = new fromVideos.SelectVideos(payload);

        expect({ ...action }).toEqual({
          type: fromVideos.SELECT_VIDEOS,
          payload
        });
      })
    })
  })
})