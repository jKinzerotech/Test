import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ElectricityConsumptionWeeklyChartComponent } from './electricity-consumption-weekly-chart.component';

describe('ElectricityConsumptionWeeklyChartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ElectricityConsumptionWeeklyChartComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ Testing backend
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(
      ElectricityConsumptionWeeklyChartComponent
    );
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
