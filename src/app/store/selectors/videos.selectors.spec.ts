import { StoreModule, Store } from '@ngrx/store';

import { TestBed } from '@angular/core/testing';

import { Video } from '../../models/video.model';

import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';

describe('Videos Selectors', () => {
  let store: Store<fromReducers.VideosState>;

  const video1: Video = {
    kind: 'youtube#searchResult',
    etag: "'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg'",
    id: {
      kind: 'youtube#video',
      videoId: '4fumBcKC6RE'
    },
    snippet: {
      publishedAt: '2011-05-12T20:01:31.000Z',
      channelId: 'UCEOhcOACopL42xyOBIv1ekg',
      title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
      description:
        'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
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
  };

  const video2 = {
    kind: 'youtube#searchResult',
    etag: "'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/p6Pk0TAiiUcZqKJ8QCas4imArtg'",
    id: {
      kind: 'youtube#video',
      videoId: 'mOVPStnVgvU'
    },
    snippet: {
      publishedAt: '2018-06-11T06:30:00.000Z',
      channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
      title: 'Stupid Watergate II: Last Week Tonight with John Oliver (HBO)',
      description:
        'John Oliver explains how the president and his allies are going full O. J. in order to undermine the investigation of Russian interference in the 2016 election.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/mOVPStnVgvU/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/mOVPStnVgvU/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/mOVPStnVgvU/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'LastWeekTonight',
      liveBroadcastContent: 'none'
    }
  };

  const videos = [video1, video2];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          reducer: fromReducers.reducer
        })
      ]
    });

    store = TestBed.get(Store);
  });

  describe('getVideos', () => {
    it('should return array of videos', () => {
      let result: Video[];

      store
        .select(fromSelectors.getVideos)
        .subscribe((value: Video[]) => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new fromActions.GetVideosSuccess(videos));

      expect(result).toEqual(videos);
    });
  });

  describe('getVideosCount', () => {
    it('should return amount of videos', () => {
      let result: number;

      store
        .select(fromSelectors.getVideosCount)
        .subscribe((value: number) => (result = value));

      expect(result).toBe(0);

      store.dispatch(new fromActions.GetVideosSuccess(videos));

      expect(result).toBe(videos.length);
    });
  });

  describe('getSelectMode', () => {
    it('should return a boolean value', () => {
      let result: boolean;

      store
        .select(fromSelectors.getSelectMode)
        .subscribe((value: boolean) => (result = value));

      expect(result).toBe(false);

      store.dispatch(new fromActions.ToggleSelectMode(true));

      expect(result).toBe(true);
    });
  });

  describe('getSelectedVideosCount', () => {
    it('should return amount of selected videos', () => {
      let result: number;

      store
        .select(fromSelectors.getSelectedVideosCount)
        .subscribe((value: number) => (result = value));

      expect(result).toBe(0);

      store.dispatch(new fromActions.SelectVideos(videos));

      expect(result).toBe(videos.length);
    });
  });
});
