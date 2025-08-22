import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzDataTableComponent } from './iz-data-table.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('IzDataTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IzDataTableComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IzDataTableComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
