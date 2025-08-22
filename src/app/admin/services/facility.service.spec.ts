import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FacilityService } from './facility.service';

describe('FacilityService', () => {
  let service: FacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FacilityService,
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ Testing backend
      ],
    });
    service = TestBed.inject(FacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
