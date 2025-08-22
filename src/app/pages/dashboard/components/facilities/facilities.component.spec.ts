import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesComponent } from './facilities.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('FacilitiesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FacilitiesComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FacilitiesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
