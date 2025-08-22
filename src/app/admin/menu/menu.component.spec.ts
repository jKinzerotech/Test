import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MenuComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
