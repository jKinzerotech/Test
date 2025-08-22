import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DateRangeComponent } from './date-range.component';

describe('DateRangeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DateRangeComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DateRangeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
