import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityColumnChartComponent } from './facility-column-chart.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('FacilityColumnChartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FacilityColumnChartComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FacilityColumnChartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
