import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { GoogleMapComponent } from './google-map.component';

describe('GoogleMapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GoogleMapComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GoogleMapComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
