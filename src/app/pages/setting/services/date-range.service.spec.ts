import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DateRangeService } from './date-range.service';
import { DateRangeComponent } from '../components/date-range/date-range.component';

describe('DateRangeService', () => {
  let service: DateRangeService;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
     providers: [
       DateRangeComponent,
       provideHttpClient(), // ✅ HttpClient setup
       provideHttpClientTesting(), // ✅ Testing backend
     ],
   }).compileComponents();;
    service = TestBed.inject(DateRangeService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
