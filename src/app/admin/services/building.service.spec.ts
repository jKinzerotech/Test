import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BuildingService } from './building.service';

describe('BuildingService', () => {
  let service: BuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BuildingService,
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ Testing backend
      ],
    });
    service = TestBed.inject(BuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
