import { TestBed, inject } from '@angular/core/testing';

import { PokedatesService } from './pokedates.service';

describe('PokedatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokedatesService]
    });
  });

  it('should be created', inject([PokedatesService], (service: PokedatesService) => {
    expect(service).toBeTruthy();
  }));
});
