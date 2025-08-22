import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponent } from './expenses.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ExpensesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ExpensesComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExpensesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
