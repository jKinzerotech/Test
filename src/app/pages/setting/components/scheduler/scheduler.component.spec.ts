import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SchedulerComponent } from './scheduler.component';

describe('SchedulerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SchedulerComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SchedulerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
