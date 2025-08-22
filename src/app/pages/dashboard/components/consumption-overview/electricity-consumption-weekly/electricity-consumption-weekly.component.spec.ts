import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityConsumptionWeeklyComponent } from './electricity-consumption-weekly.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('WeatherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ElectricityConsumptionWeeklyComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(
      ElectricityConsumptionWeeklyComponent
    );
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
