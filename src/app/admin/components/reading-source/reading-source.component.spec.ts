import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ReadingSourceComponent } from './reading-source.component';

describe('ReadingSourceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReadingSourceComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ReadingSourceComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
