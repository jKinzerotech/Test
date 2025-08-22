import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FacilityComponent } from './facility.component';

describe('FacilityComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FacilityComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
        {
          provide: ActivatedRoute, // ✅ Mock ActivatedRoute
          useValue: {
            params: of({ id: 42 }), // 👈 mock route param
            queryParams: of({}), // 👈 mock query params if needed
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'id' ? '42' : null),
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FacilityComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
