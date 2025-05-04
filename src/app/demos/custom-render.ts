import { Component } from "@angular/core";
import { GregorianDateAdapter, JalaliDateAdapter } from "../../../projects/asa-date-picker/src/asa-date-adapter";


@Component({
    selector: 'custom-render',
    template: `
        Gregorian:
        <asa-date-picker
            [(ngModel)]="selectedDate"
        >
            <ng-template Template="day" let-date>
                <span class="meeting"
                    *ngIf="date.getDate() == 14 || date.getDate() == 16 || date.getDate() == 18"
                >
                    {{ date.getDate() }}
                </span>
                <span
                    *ngIf="date.getDate() != 14 && date.getDate() != 16 && date.getDate() != 18"
                >
                    {{ date.getDate() }}
                </span>
            </ng-template>
        </asa-date-picker>
        <br>
        Jalali:
        <asa-date-picker
            dir="rtl"
            [rtl]="true"
            [calendarType]="'jalali'"
            [(ngModel)]="selectedDate"
        >
            <ng-template Template="day" let-date>
            <span class="meeting"
                    *ngIf="getJalaliDay(date) == 14 || getJalaliDay(date) == 16 || getJalaliDay(date) == 18"
                >
                    {{ getJalaliDay(date) }}
                </span>
                <span
                    *ngIf="getJalaliDay(date) != 14 && getJalaliDay(date) != 16 && getJalaliDay(date) != 18"
                >
                    {{ getJalaliDay(date) }}
                </span>
            </ng-template>
        </asa-date-picker>
        <br>
        Month:
        <asa-date-picker
            [(ngModel)]="selectedDate"
            [mode]="'month'"
        >
            <ng-template Template="month" let-month>
                <div class="border-red">
                    {{ getMonthName(month) }}
                </div>
            </ng-template>
        </asa-date-picker>
        <br>
        Year:
        <asa-date-picker
            [(ngModel)]="selectedDate"
            [mode]="'year'"
        >
            <ng-template Template="year" let-year>
                <div *ngIf="year % 2 == 0" class="border-red">
                    {{ year }}
                </div>
                <div *ngIf="year % 2 != 0" class="meeting">
                    {{ year }}
                </div>
            </ng-template>
        </asa-date-picker>
        <br>
        <button class="toggle-btn" (click)="toggleCode(code)">show code</button>
        <div id="code" class="code" #code>
            <code>
                {{ demoCode }}
            </code>
        </div>
    `,
    styles: [`
        .border-red {
            border-bottom: 1px dashed red;
        }
        .border-green:after{
            position: absolute;
            top: 4px;
            left: 38%;
            width: 12px;
            height: 1px;
            margin-left: -1.5px;
            content: "";
            background-color: green;
        }
        .meeting {
            position: relative;
            color: #00a1e8;
        }
        .meeting:after {
            position: absolute;
            bottom: -2px;
            left: 48%;
            width: 3px;
            height: 3px;
            margin-left: -1.5px;
            content: "";
            border-radius: 50%;
            background-color: #ff81a8;
        }
    `]
})
export class CustomRender {
    selectedDate: Date | string;

    constructor(
        private jalali: JalaliDateAdapter,
        private gregorian: GregorianDateAdapter
    ) {}

    getJalaliDay(date: Date) {
        return this.jalali.getDate(date)
    }

    getMonthName(monthNumber: number) {
        let months = this.gregorian.getMonthNames('short');
        let month = months[monthNumber-1]
        return month;
    }

    toggleCode(elm: HTMLDivElement) {
        let display = elm.style.display;
        if (display != 'block') {
          elm.style.display = 'block';
        } else {
          elm.style.display = 'none';
        }
    }

    demoCode = `
        @Component({
        selector: 'custom-render',
        template: \`
            Gregorian:
        <asa-date-picker
            [(ngModel)]="selectedDate"
        >
            <ng-template Template="day" let-date>
                <span class="meeting"
                    *ngIf="date.getDate() == 14 || date.getDate() == 16 || date.getDate() == 18"
                >
                    {{ date.getDate() }}
                </span>
                <span
                    *ngIf="date.getDate() != 14 && date.getDate() != 16 && date.getDate() != 18"
                >
                    {{ date.getDate() }}
                </span>
            </ng-template>
        </asa-date-picker>
        <br>
        Jalali:
        <asa-date-picker
            dir="rtl"
            [rtl]="true"
            [calendarType]="'jalali'"
            [(ngModel)]="selectedDate"
        >
            <ng-template Template="day" let-date>
            <span class="meeting"
                    *ngIf="getJalaliDay(date) == 14 || getJalaliDay(date) == 16 || getJalaliDay(date) == 18"
                >
                    {{ getJalaliDay(date) }}
                </span>
                <span
                    *ngIf="getJalaliDay(date) != 14 && getJalaliDay(date) != 16 && getJalaliDay(date) != 18"
                >
                    {{ getJalaliDay(date) }}
                </span>
            </ng-template>
        </asa-date-picker>
        <br>
        Month:
        <asa-date-picker
            [(ngModel)]="selectedDate"
            [mode]="'month'"
        >
            <ng-template Template="month" let-month>
                <div class="border-red">
                    {{ getMonthName(month) }}
                </div>
            </ng-template>
        </asa-date-picker>
        <br>
        Year:
        <asa-date-picker
            [(ngModel)]="selectedDate"
            [mode]="'year'"
        >
            <ng-template Template="year" let-year>
                <div *ngIf="year % 2 == 0" class="border-red">
                    {{ year }}
                </div>
                <div *ngIf="year % 2 != 0" class="meeting">
                    {{ year }}
                </div>
            </ng-template>
        </asa-date-picker>
        \`,
        styles: [\`
        .border-red {
            border-bottom: 1px dashed red;
        }
        .border-green:after{
            position: absolute;
            top: 4px;
            left: 38%;
            width: 12px;
            height: 1px;
            margin-left: -1.5px;
            content: "";
            background-color: green;
        }
        .meeting {
            position: relative;
            color: #00a1e8;
        }
        .meeting:after {
            position: absolute;
            bottom: -2px;
            left: 48%;
            width: 3px;
            height: 3px;
            margin-left: -1.5px;
            content: "";
            border-radius: 50%;
            background-color: #ff81a8;
        }
    \`]
    })
    export class CustomRender {
        selectedDate: Date | string;

        constructor(
            private jalali: JalaliDateAdapter,
            private gregorian: GregorianDateAdapter
        ) {}

        getJalaliDay(date: Date) {
            return this.jalali.getDate(date)
        }

        getMonthName(monthNumber: number) {
            let months = this.gregorian.getMonthNames('short');
            let month = months[monthNumber-1]
            return month;
        }
    }
    `;
}
