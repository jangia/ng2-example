import { TestBed, inject } from '@angular/core/testing';

import { CarsService } from './cars.service';

describe('CarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsService]
    });
  });

  it('should ...', inject([CarsService], (service: CarsService) => {
    expect(service).toBeTruthy();
  }));
});
