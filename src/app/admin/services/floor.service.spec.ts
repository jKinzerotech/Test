import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FloorService } from './floor.service';

describe('FloorService', () => {
  let service: FloorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FloorService,
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ Testing backend
      ],
    });
    service = TestBed.inject(FloorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
