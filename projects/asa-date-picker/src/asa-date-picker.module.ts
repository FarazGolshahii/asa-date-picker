import { NgModule } from '@angular/core';
import { AsaDatePickerComponent } from './asa-date-picker.component';
import { DatePickerPopupComponent } from './date-picker-popup/date-picker-popup.component';
import { DateMaskDirective } from './utils/input-mask.directive';
import { NzConnectedOverlayDirective } from './public-api';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { CustomTemplate } from './utils/template.directive';

@NgModule({
  imports: [
    AsaDatePickerComponent,
    DatePickerPopupComponent,
    DateMaskDirective,
    NzConnectedOverlayDirective,
    TimePickerComponent,
    CustomTemplate
  ],
  exports: [
    AsaDatePickerComponent,
    TimePickerComponent,
    DatePickerPopupComponent,
    DateMaskDirective,
    NzConnectedOverlayDirective,
    CustomTemplate
  ]
})
export class AsaDatePickerModule { }
