import { TestBed } from '@angular/core/testing';

import { CookingBackendService } from './cooking-backend.service';

describe('CookingBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookingBackendService = TestBed.get(CookingBackendService);
    expect(service).toBeTruthy();
  });
});
