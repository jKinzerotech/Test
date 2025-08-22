import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SpeedometerComponent } from './speedometer.component';

describe('SpeedometerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SpeedometerComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SpeedometerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
