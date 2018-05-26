import { TestBed, inject } from '@angular/core/testing';

import { CartProductDataService } from './cart-product-data.service';

describe('CartProductDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartProductDataService]
    });
  });

  it('should be created', inject([CartProductDataService], (service: CartProductDataService) => {
    expect(service).toBeTruthy();
  }));
});
