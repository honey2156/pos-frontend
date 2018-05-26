import { TestBed, inject } from '@angular/core/testing';

import { CartCustomerDataService } from './cart-customer-data.service';

describe('CartCustomerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartCustomerDataService]
    });
  });

  it('should be created', inject([CartCustomerDataService], (service: CartCustomerDataService) => {
    expect(service).toBeTruthy();
  }));
});
