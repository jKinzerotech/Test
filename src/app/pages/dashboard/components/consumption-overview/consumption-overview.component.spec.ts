import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionOverviewComponent } from './consumption-overview.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
describe('WeatherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ConsumptionOverviewComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConsumptionOverviewComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
