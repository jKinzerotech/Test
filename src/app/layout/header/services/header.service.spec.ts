import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('HeaderService', () => {
  let service: HeaderService;

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      HeaderService,
      provideHttpClient(), // ✅ HttpClient setup
      provideHttpClientTesting(), // ✅ Testing backend
    ],
  });
  service = TestBed.inject(HeaderService);
});
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
