import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDashboardNavComponent } from './products-dashboard-nav.component';

describe('ProductsDashboardNavComponent', () => {
  let component: ProductsDashboardNavComponent;
  let fixture: ComponentFixture<ProductsDashboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDashboardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
