/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarService } from './car.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Car', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
