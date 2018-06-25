import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationTimeComponent } from './publication-time.component';

describe('PublicationTimeComponent', () => {
  let component: PublicationTimeComponent;
  let fixture: ComponentFixture<PublicationTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationTimeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationTimeComponent);
    component = fixture.componentInstance;
    component.agInit({ value: '2011-05-12T20:01:31.000Z', pending: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('agInit', () => {

    it('should change this.params to passed params', () => {
      const param: any = { value: '01-01-2018' };
      const result: any = { date: 'Mon Jan 01 2018' };

      component.agInit(param);
      expect(component.params).toEqual(result);
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
