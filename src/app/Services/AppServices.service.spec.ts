/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppServicesService } from './AppServices.service';

describe('Service: AppServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppServicesService]
    });
  });

  it('should ...', inject([AppServicesService], (service: AppServicesService) => {
    expect(service).toBeTruthy();
  }));
});
