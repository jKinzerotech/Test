import { TestBed } from '@angular/core/testing';
import { RoundingService } from '../../core/utils/rounding.service';
import { RoundingPipe } from './rounding.pipe';

describe('RoundingPipe', () => {
  let pipe: RoundingPipe;
  let roundingServiceSpy: jasmine.SpyObj<RoundingService>;

  beforeEach(() => {
    // Create a spy for the service
    const spy = jasmine.createSpyObj('RoundingService', [
      'roundToNearestInteger',
    ]);

    TestBed.configureTestingModule({
      providers: [
        RoundingPipe,
        { provide: RoundingService, useValue: spy }, // ✅ inject mock service
      ],
    });

    pipe = TestBed.inject(RoundingPipe);
    roundingServiceSpy = TestBed.inject(
      RoundingService
    ) as jasmine.SpyObj<RoundingService>;
  });

  it('should round numbers', () => {
    roundingServiceSpy.roundToNearestInteger.and.returnValue(3); // mock behavior

    expect(pipe.transform(3.14159)).toBe(3);
    expect(roundingServiceSpy.roundToNearestInteger).toHaveBeenCalledWith(
      3.14159
    );
  });
});
