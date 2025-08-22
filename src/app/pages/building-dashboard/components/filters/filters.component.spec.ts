import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FiltersComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
