import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTitleComponent } from './video-title.component';

describe('VideoTitleComponent', () => {
  let component: VideoTitleComponent;
  let fixture: ComponentFixture<VideoTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTitleComponent);
    component = fixture.componentInstance;
    component.agInit({data: { id: {videoId: '123123'}, snippet: { title: 'Title'} }, });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('agInit', () => {

    it('should change this.params to passed params', () => {
      component.agInit({ data: 'Test data'});

      expect(component.params).toBe('Test data');
    });

    it('should not return any value', () => {
      expect(component.agInit({valu: 'test'})).toBeUndefined();
    });
  });

  describe('refresh', () => {

    it('should call refresh and get false', () => {
      expect(component.refresh()).toBe(false);
    });
  });

});
