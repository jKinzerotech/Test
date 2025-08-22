import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityConsumptionOverviewChartComponent } from './facility-consumption-overview-chart.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('FacilityConsuptionOverviewChartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FacilityConsumptionOverviewChartComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(
      FacilityConsumptionOverviewChartComponent
    );
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
