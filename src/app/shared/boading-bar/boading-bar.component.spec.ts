import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BoadingBarComponent } from './boading-bar.component';

describe('BoadingBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BoadingBarComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BoadingBarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
