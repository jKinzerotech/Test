import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UploadImageComponent } from './upload-image.component';

describe('UploadImageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UploadImageComponent, // ✅ standalone component
      ],
      providers: [
        provideHttpClient(), // ✅ HttpClient setup
        provideHttpClientTesting(), // ✅ HttpClient mock/testing
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UploadImageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
