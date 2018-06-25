import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { HttpResponse } from "@angular/common/http";

import { environment } from './../../environments/environment.prod';
import { ApiService } from './api.service';


describe('ApiService', () => {

  let service: ApiService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.get(ApiService);
    httpClient = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('should have getData public method', () => {
      expect(service.getData).toBeDefined();
    });

    it('should return a expected data', () => {
      const expectedData = {
        "kind": "youtube#searchListResponse",
        "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/LRk0W0az1DV57l7_l12WZiqt6rw\"",
        "nextPageToken": "CDIQAA",
        "regionCode": "UA",
        "pageInfo": {
          "totalResults": 1000000,
          "resultsPerPage": 50
        },
        "items": [
          {
            "kind": "youtube#searchResult",
            "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\"",
            "id": {
              "kind": "youtube#video",
              "videoId": "3fumBcKC6RE"
            },
            "snippet": {
              "publishedAt": "2011-05-12T20:01:31.000Z",
              "channelId": "UCEOhcOACopL42xyOBIv1ekg",
              "title": "Lil Wayne - John (Explicit) ft. Rick Ross",
              "description": "Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "LilWayneVEVO",
              "liveBroadcastContent": "none"
            }
          }
        ]
      };     

      service.getData()
        .subscribe(
          data => expect(data).toEqual(expectedData),
          error => console.error(error)
        );

      httpClient.expectOne(`${environment.host}${environment.url}`).event(
        new HttpResponse<any>({body: expectedData}));
    });
  });


});
