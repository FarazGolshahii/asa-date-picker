import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePickerPopupComponent} from "./date-picker-popup/date-picker-popup.component";
import {DateMaskDirective} from "./utility/utils/input-mask.directive";
import {NzConnectedOverlayDirective} from "./utility/utils/overlay/overlay";
import {AsaDatePickerService} from "./asa-date-picker.service";
import {AsaDatePickerComponent} from "./asa-date-picker.component";
import {OverlayModule} from "@angular/cdk/overlay";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    // Add standalone components here
    AsaDatePickerComponent,
    DatePickerPopupComponent,
    DateMaskDirective,
    NzConnectedOverlayDirective
  ],
  exports: [
    AsaDatePickerComponent,
    DatePickerPopupComponent,
    DateMaskDirective
  ],
  providers: [
    AsaDatePickerService
  ]
})
export class AsaDatePickerModule { }
