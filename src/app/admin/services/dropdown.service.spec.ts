import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DropdownService } from './dropdown.service';

describe('DropdownService', () => {
  let service: DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DropdownService, // ✅ provide the service, not a component
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ Testing backend
      ],
    });
    service = TestBed.inject(DropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
