import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedOrdersDetailComponent } from './saved-orders-detail.component';

describe('SavedOrdersDetailComponent', () => {
  let component: SavedOrdersDetailComponent;
  let fixture: ComponentFixture<SavedOrdersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedOrdersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedOrdersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
