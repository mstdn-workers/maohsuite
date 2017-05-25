import { TestBed, inject } from '@angular/core/testing';

import { MastdonService } from './mastdon.service';

describe('MastdonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MastdonService]
    });
  });

  it('should be created', inject([MastdonService], (service: MastdonService) => {
    expect(service).toBeTruthy();
  }));
});
