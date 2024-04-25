import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../../common/dynamic-header/dynamic_header.component';
import { StaticFooterV2Component } from '../../../common/static-footer-v2/static_footer_v2.component';
import { AccountMenuComponent } from '../../../common/menu/account_menu.component';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { map, Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'history',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    DynamicHeaderComponent,
    StaticFooterV2Component,
    AccountMenuComponent
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent {
  userData!: Observable<any>;
  selectedMonth!: Moment;

  constructor(private firestore: Firestore) {
    this.getData(moment()); // Initialize with current month
  }

  getData(selectedMonth: Moment) {
    this.selectedMonth = selectedMonth;
    const startOfMonth = selectedMonth.clone().startOf('month').valueOf();
    const endOfMonth = selectedMonth.clone().endOf('month').valueOf();

    const collectionInstance = collection(this.firestore, 'transfers');
    this.userData = collectionData(collectionInstance, { idField: 'ID' }).pipe(
      map(data => data.filter(item => {
        const timestamp = item['Date'].toMillis(); // Assuming 'timestamp' is the field name
        return timestamp >= startOfMonth && timestamp <= endOfMonth;
      }))
    );
    
    this.userData.subscribe(val => {
      console.log(val);
    });
  }

  date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    this.getData(ctrlValue);
    datepicker.close();
  }
}
