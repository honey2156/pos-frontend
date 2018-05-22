import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboardViewComponent } from './product-dashboard-view.component';

describe('ProductDashboardViewComponent', () => {
  let component: ProductDashboardViewComponent;
  let fixture: ComponentFixture<ProductDashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDashboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
