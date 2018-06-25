import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsComponent } from './thumbnails.component';

describe('ThumbnailsComponent', () => {
  let component: ThumbnailsComponent;
  let fixture: ComponentFixture<ThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsComponent);
    component = fixture.componentInstance;
    component.agInit({ value: { url: 'localhost:4200', width: 200, height: 150 } });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('agInit', () => {

    it('should change this.params to passed params', () => {
      component.agInit({ value: 'Test data'});

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
