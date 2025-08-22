import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HourlyConsumptionComponent } from './hourly-consumption.component';

describe('HourlyConsumptionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HourlyConsumptionComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HourlyConsumptionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
