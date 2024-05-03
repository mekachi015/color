import { TestBed } from '@angular/core/testing';

import { ColorshadeService } from './colorshade.service';

describe('ColorshadeService', () => {
  let service: ColorshadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorshadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
