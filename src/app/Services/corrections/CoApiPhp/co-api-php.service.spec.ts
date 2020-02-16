import { TestBed } from '@angular/core/testing';

import { CoApiPhpService } from './co-api-php.service';

describe('CoApiPhpService', () => {
  let service: CoApiPhpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoApiPhpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
