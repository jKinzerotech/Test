import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzTextboxComponent } from './iz-textbox.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('IzTextboxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IzTextboxComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IzTextboxComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
