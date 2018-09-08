import { TestBed, inject } from '@angular/core/testing';

import { RetrieveItemsService } from './retrieve-items.service';

describe('RetrieveItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveItemsService]
    });
  });

  it('should be created', inject([RetrieveItemsService], (service: RetrieveItemsService) => {
    expect(service).toBeTruthy();
  }));
});
