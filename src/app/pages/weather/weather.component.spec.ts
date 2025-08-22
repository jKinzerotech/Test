import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WeatherComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
