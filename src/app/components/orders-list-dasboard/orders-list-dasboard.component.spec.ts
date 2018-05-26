import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListDasboardComponent } from './orders-list-dasboard.component';

describe('OrdersListDasboardComponent', () => {
  let component: OrdersListDasboardComponent;
  let fixture: ComponentFixture<OrdersListDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
