import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ConsumptionComponent } from './consumption.component';

describe('ConsumptionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ConsumptionComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConsumptionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
