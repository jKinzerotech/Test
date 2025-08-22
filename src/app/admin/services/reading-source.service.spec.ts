import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ReadingSourceService } from './reading-source.service';

describe('ReadingSourceService', () => {
  let service: ReadingSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReadingSourceService,
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ Testing backend
      ],
    });
    service = TestBed.inject(ReadingSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
