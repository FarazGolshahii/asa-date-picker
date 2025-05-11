<p align="center">
  <img src="./logo.png" alt="Package Name" width="200" height="200"/>
</p>

# Asa-Date-Picker

## Overview
The asa-date-picker library is a versatile and customizable Angular component designed to facilitate date and time selection in web applications. It supports both Gregorian and Jalali (Persian) calendars, offers single date and range selection modes, and includes features such as time picking, input masking, and RTL (Right-to-Left) layout support. The library leverages Angular's reactive forms for robust form integration and uses the Angular CDK for overlay functionality to display the date picker popup.

Key highlights include:
- Support for single date and date range selection
- Multiple calendar types (Gregorian and Jalali)
- Customizable date and time formats
- Responsive and accessible UI with animation support
- Extensive configuration options for styling, placement, and behavior

## Installation

### Prerequisites
- Angular version 12.0.0 or higher
- Node.js and npm installed for package management

### Steps to Install
1. **Extract the Library**: Unzip the provided asa-date-picker.zip file
2. **Install via npm**:
   ```bash
   npm install asa-date-picker
3. **Add to Angular Module**:
   ```typescript
   import { AsaDatePickerModule } from 'asa-date-picker';

   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       AsaDatePickerModule
     ],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```
4. **Include Styles**: Add CSS file to angular.json or global styles

## Features
- **Calendar Types**: Gregorian and Jalali
- **Modes**: Day selection
- **Range Selection**: Start and end dates
- **Time Picker**: Integrated time selection
- **Input Masking**: Format enforcement
- **Min/Max Dates**: Selection boundaries
- **Disabled Dates**: Specific date blocking
- **RTL Support**: Right-to-Left layout
- **Placement Options**: Custom popup positioning
- **Inline Mode**: Non-popup display
- **Sidebar/Today Button**: Additional UI elements
- **Custom Styling**: CSS customization
- **Event Emitters**: User interaction events
- **Accessibility**: Read-only and disabled states
- **Localization**: Language and label customization

## Usage

### Basic Setup
```html
<asa-date-picker
  [format]="'yyyy/MM/dd'"
  (onChangeValue)="onDateChange($event)">
</asa-date-picker>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  onDateChange(value: any) {
    console.log('Selected Date:', value);
  }
}
```

### Advanced Usage
```html
<asa-date-picker
  [format]="'yyyy/MM/dd HH:mm'"
  [calendarType]="'jalali'"
  [isRange]="true"
  [rtl]="true"
  [placement]="'bottomRight'"
  [minDate]="minDate"
  [maxDate]="maxDate"
  [disabledDates]="disabledDates"
  [showSidebar]="true"
  [showToday]="true"
  [cssClass]="'custom-date-picker'"
  [inputPlaceholder]="'Select Date Range'"
  [footerDescription]="'Select a date range within the allowed period.'"
  (onChangeValue)="onRangeChange($event)"
  (onOpenChange)="onOpenChange($event)"
  (onFocus)="onFocus($event)"
  (onBlur)="onBlur($event)">
</asa-date-picker>
```

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-example',
  templateUrl: './advanced-example.component.html',
  styles: [`
    .custom-date-picker {
      background-color: #f0f0f0;
      border: 1px solid #ccc;
    }
  `]
})
export class AdvancedExampleComponent implements OnInit {
  minDate: string = '1402/01/01';
  maxDate: string = '1403/12/30';
  disabledDates: string[] = ['1402/05/15', '1402/05/16'];

  ngOnInit() {
    // Initialization logic
  }

  onRangeChange(value: any) {
    console.log('Selected Range:', value);
  }

  onOpenChange(isOpen: boolean) {
    console.log('Date Picker Open State:', isOpen);
  }

  onFocus(event: any) {
    console.log('Input Focused:', event);
  }

  onBlur(event: any) {
    console.log('Input Blurred:', event);
  }
}
```

## API Reference

### Inputs
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| format | string | 'yyyy/MM/dd' | Date format string |
| minDate | string \| Date | undefined | Minimum selectable date |
| maxDate | string \| Date | undefined | Maximum selectable date |
| rtl | boolean | false | RTL layout |
| mode | string | 'day' | Selection mode |
| isRange | boolean | false | Range selection |
| calendarType | string | 'gregorian' | Calendar type |
| cssClass | string | '' | Custom CSS class |
| footerDescription | string | '' | Footer text |
| placement | string | 'bottomRight' | Popup position |
| disabled | boolean | false | Disable component |
| isInline | boolean | false | Inline display |
| showSidebar | boolean | true | Show sidebar |
| showToday | boolean | false | Show Today button |
| valueFormat | string | 'gregorian' | Output format |
| disableInputMask | boolean | false | Disable input masking |
| disabledDates | string[] \| Date[] | [] | Disabled dates |
| allowEmpty | boolean | false | Allow empty values |
| readOnly | boolean | false | Read-only mode |
| readOnlyInput | boolean | false | Read-only input |
| customStyle | string | '' | Inline styles |
| inputPlaceholder | string | '' | Input placeholder |
| disableCalendarInteraction | boolean | false | Disable calendar UI |

### Outputs
| Event | Type | Description |
|-------|------|-------------|
| onFocus | EventEmitter<any> | Input focus event |
| onBlur | EventEmitter<any> | Input blur event |
| onChangeValue | EventEmitter<any> | Value change event |
| onOpenChange | EventEmitter<boolean> | Popup open/close event |

## Styling
```css
.custom-date-picker {
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #f8f9fa;
}

.custom-date-picker input {
  padding: 8px;
  font-size: 14px;
}
```

## Troubleshooting
- **Date Parsing**: Verify format matches calendar type
- **Popup Positioning**: Check placement and CSS
- **Disabled Dates**: Ensure correct format
- **Time Picker**: Include time in format string

## Conclusion
The asa-date-picker library provides comprehensive date selection capabilities for Angular applications, supporting multiple calendars, range selection, and extensive customization options.


```
