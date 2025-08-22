import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityConsumptionExpensesComponent } from './facility-consumption-expenses.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('FacilityConsumptionExpensesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FacilityConsumptionExpensesComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(
      FacilityConsumptionExpensesComponent
    );
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
