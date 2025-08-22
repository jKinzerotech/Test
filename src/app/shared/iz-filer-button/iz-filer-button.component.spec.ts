import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzFilerButtonComponent } from './iz-filer-button.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('IzFilerButtonComponent', () => {
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [
      IzFilerButtonComponent, // ✅ standalone component
    ],
    providers: [
      provideHttpClient(), // ✅ HttpClient setup
      provideHttpClientTesting(), // ✅ HttpClient mock/testing
    ],
  }).compileComponents();
});

it('should create', () => {
  const fixture = TestBed.createComponent(IzFilerButtonComponent);
  const component = fixture.componentInstance;
  expect(component).toBeTruthy();
});
});
