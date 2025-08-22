import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzDropdownComponent } from './iz-dropdown.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('IzDropdownComponent', () => {
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [
      IzDropdownComponent, // ✅ standalone component
    ],
    providers: [
      provideHttpClient(), // ✅ HttpClient setup
      provideHttpClientTesting(), // ✅ HttpClient mock/testing
    ],
  }).compileComponents();
});

it('should create', () => {
  const fixture = TestBed.createComponent(IzDropdownComponent);
  const component = fixture.componentInstance;
  expect(component).toBeTruthy();
});
});
