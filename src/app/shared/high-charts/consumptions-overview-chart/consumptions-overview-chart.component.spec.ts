import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ConsumptionsOverviewChartComponent } from './consumptions-overview-chart.component';

describe('ConsumptionsOverviewChartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ConsumptionsOverviewChartComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConsumptionsOverviewChartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
