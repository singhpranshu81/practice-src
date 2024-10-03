import { TestBed } from '@angular/core/testing';

import { ManiService } from './mani.service';

describe('ManiService', () => {
  let service: ManiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
