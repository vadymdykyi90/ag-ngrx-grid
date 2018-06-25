import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { cold } from 'jasmine-marbles';
import { Observable, empty, of } from 'rxjs';

import { Video } from '../../models/video.model';
import { ApiService } from '../../services/api.service';
import * as fromEffects from './videos.effects';
import * as fromActions from '../actions/videos.actions';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions(): TestActions {
  return new TestActions();
}

describe('VideosEffects', () => {
  let actions$: TestActions;
  let service: ApiService;
  let effects: fromEffects.VideosEffects;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        fromEffects.VideosEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ApiService);
    effects = TestBed.get(fromEffects.VideosEffects);

    spyOn(service, 'getData').and.returnValue(of(videos));
  });

  describe('getVideos$', () => {
    it('should return a collection from GetVideosSuccess', () => {
      const action: any = new fromActions.GetVideos();
      const completion: any = new fromActions.GetVideosSuccess(undefined);

      actions$.stream = cold('--a', { a: action });
      const expected: any = cold('--b', { b: completion });
      expect(effects.getVideos$).toBeObservable(expected);
    });
  });

});
