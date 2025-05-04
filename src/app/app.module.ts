import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsaDatePickerModule } from 'projects/asa-date-picker/src/asa-date-picker.module';
import { DisabledDates } from './demos/disabled/diabled-date';
import { DisabledTimes } from './demos/disabled/diabled-time';
import { CustomRender } from './demos/custom-render';

@NgModule({
  declarations: [
    AppComponent,
    DisabledDates,
    DisabledTimes,
    CustomRender
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AsaDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
