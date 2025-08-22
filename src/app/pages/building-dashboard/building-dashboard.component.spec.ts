import { TestBed } from '@angular/core/testing';
import { BuildingDashboardComponent } from './building-dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BuildingDashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BuildingDashboardComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute, // ✅ Mock route
          useValue: {
            params: of({ id: 123 }), // 👈 mock param
            queryParams: of({}), // 👈 optional
            snapshot: { paramMap: { get: () => '123' } }, // 👈 fallback
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BuildingDashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
