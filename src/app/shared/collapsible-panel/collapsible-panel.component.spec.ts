import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsiblePanelComponent } from './collapsible-panel.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CollapsiblePanelComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CollapsiblePanelComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CollapsiblePanelComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
