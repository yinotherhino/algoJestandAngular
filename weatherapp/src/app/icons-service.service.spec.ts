import { TestBed } from '@angular/core/testing';

import { IconsServiceService } from './icons-service.service';

describe('IconsServiceService', () => {
  let service: IconsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
