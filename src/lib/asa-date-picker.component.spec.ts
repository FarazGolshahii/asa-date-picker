import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsaDatePickerComponent } from './asa-date-picker.component';

describe('AsaDatePickerComponent', () => {
  let component: AsaDatePickerComponent;
  let fixture: ComponentFixture<AsaDatePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsaDatePickerComponent]
    });
    fixture = TestBed.createComponent(AsaDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
