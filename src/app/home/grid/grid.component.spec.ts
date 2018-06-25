import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([GridComponent]),
        StoreModule.forRoot({})
      ],
      declarations: [ GridComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initGrid', () => {

    beforeEach(() => {
      component.initGrid();
    });

    it('should fill gridOptions', () => {
      expect(component.gridOptions).toBeDefined();
    });

    it('should not return any value', () => {
      expect(component.initGrid()).toBeUndefined();
    });

  });

  describe('getContextMenuItems', () => {

    it('should return a value for Video Title column', () => {
      const params: any = {
        column: {
          colDef: {
            headerName: 'Video Title'
          }
        },
        node: {
          data: {
            id: {
              videoId: '#'
            }
          }
        }
      };
      const result: any = {
        name: `<a href="https://www.youtube.com/watch?v=#" target="_blank">Open in new tab</a>`
      };

      expect(component.getContextMenuItems(params)).toContain(result);
    });

    it('should not return anything for invalid params', () => {
      const params: any = {
        column: {
          colDef: {
            headerName: 'INVALID'
          }
        },
        node: {
          data: {
            id: {
              videoId: '#'
            }
          }
        }
      };

      expect(component.getContextMenuItems(params)).toBeUndefined();
    });

  });

});
