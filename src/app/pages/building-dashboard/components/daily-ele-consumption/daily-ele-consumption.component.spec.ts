import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEleConsumptionComponent } from './daily-ele-consumption.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DailyEleConsumptionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DailyEleConsumptionComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DailyEleConsumptionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
