import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDasboardComponent } from './checkout-dasboard.component';

describe('CheckoutDasboardComponent', () => {
  let component: CheckoutDasboardComponent;
  let fixture: ComponentFixture<CheckoutDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
