import { TestBed } from '@angular/core/testing';

import { AsaDatePickerService } from './asa-date-picker.service';

describe('AsaDatePickerService', () => {
  let service: AsaDatePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsaDatePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
