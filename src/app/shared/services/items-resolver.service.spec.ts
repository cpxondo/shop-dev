import { TestBed, inject } from '@angular/core/testing';

import { ItemsResolver } from './items-resolver.service';

describe('ItemsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsResolver]
    });
  });

  it('should be created', inject([ItemsResolver], (service: ItemsResolver) => {
    expect(service).toBeTruthy();
  }));
});
