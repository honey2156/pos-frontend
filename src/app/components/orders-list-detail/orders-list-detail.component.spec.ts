import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListDetailComponent } from './orders-list-detail.component';

describe('OrdersListDetailComponent', () => {
  let component: OrdersListDetailComponent;
  let fixture: ComponentFixture<OrdersListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
