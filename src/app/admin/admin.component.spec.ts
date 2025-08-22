import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AdminComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
        {
          provide: ActivatedRoute, // ✅ Mock ActivatedRoute
          useValue: {
            params: of({ adminId: 2 }), // 👈 mock route param
            queryParams: of({}), // 👈 mock query params if needed
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'adminId' ? '2' : null),
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
