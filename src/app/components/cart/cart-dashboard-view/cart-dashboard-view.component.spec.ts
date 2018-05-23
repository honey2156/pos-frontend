import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDashboardViewComponent } from './cart-dashboard-view.component';

describe('CartDashboardViewComponent', () => {
  let component: CartDashboardViewComponent;
  let fixture: ComponentFixture<CartDashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDashboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
