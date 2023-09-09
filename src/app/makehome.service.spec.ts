import { TestBed } from '@angular/core/testing';

import { MakehomeService } from './makehome.service';

describe('MakehomeService', () => {
  let service: MakehomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakehomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
