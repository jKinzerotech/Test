import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectFromDeviceComponent } from './direct-from-device.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

 describe('DirectFromDeviceComponent', () => {
   beforeEach(async () => {
     await TestBed.configureTestingModule({
       imports: [
         DirectFromDeviceComponent, // ✅ standalone component
       ],
       providers: [
         provideHttpClient(), // ✅ HttpClient setup
         provideHttpClientTesting(), // ✅ HttpClient mock/testing
       ],
     }).compileComponents();
   });

   it('should create', () => {
     const fixture = TestBed.createComponent(DirectFromDeviceComponent);
     const component = fixture.componentInstance;
     expect(component).toBeTruthy();
   });
 });
