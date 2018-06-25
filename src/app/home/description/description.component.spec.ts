import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComponent } from './description.component';
import { AgGridModule } from 'ag-grid-angular';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AgGridModule.withComponents([DescriptionComponent]) ],
      declarations: [ DescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    component.agInit({value: 'Test data'});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('agInit', () => {

    it('should change this.params to passed params', () => {
      const result: any = { value: 'Test data'};

      component.agInit(result);
      expect(component.params).toBe(result);
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
