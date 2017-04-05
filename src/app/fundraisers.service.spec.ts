import { TestBed, inject } from '@angular/core/testing';

import { FundraisersService } from './fundraisers.service';

describe('FundraisersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundraisersService]
    });
  });

  it('should ...', inject([FundraisersService], (service: FundraisersService) => {
    expect(service).toBeTruthy();
  }));
});
