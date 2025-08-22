import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEleConsumptionComponent } from './monthly-ele-consumption.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MonthlyEleConsumptionComponent', () => {
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [
      MonthlyEleConsumptionComponent, // ✅ standalone component
    ],
    providers: [
      provideHttpClient(), // ✅ HttpClient setup
      provideHttpClientTesting(), // ✅ HttpClient mock/testing
    ],
  }).compileComponents();
});

it('should create', () => {
  const fixture = TestBed.createComponent(MonthlyEleConsumptionComponent);
  const component = fixture.componentInstance;
  expect(component).toBeTruthy();
});
});
