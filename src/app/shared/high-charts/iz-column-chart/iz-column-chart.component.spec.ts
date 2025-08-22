import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IZColumnChartComponent } from './iz-column-chart.component';

describe('IzColumnChartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IZColumnChartComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IZColumnChartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
