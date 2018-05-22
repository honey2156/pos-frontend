import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDashboardNavComponent } from './cart-dashboard-nav.component';

describe('CartDashboardNavComponent', () => {
  let component: CartDashboardNavComponent;
  let fixture: ComponentFixture<CartDashboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDashboardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
