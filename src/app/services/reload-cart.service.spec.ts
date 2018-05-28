import { TestBed, inject } from '@angular/core/testing';

import { ReloadCartService } from './reload-cart.service';

describe('ReloadCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReloadCartService]
    });
  });

  it('should be created', inject([ReloadCartService], (service: ReloadCartService) => {
    expect(service).toBeTruthy();
  }));
});
