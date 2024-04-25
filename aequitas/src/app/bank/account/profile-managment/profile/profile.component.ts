import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../../../common/dynamic-header/dynamic_header.component';
import { StaticFooterV2Component } from '../../../../common/static-footer-v2/static_footer_v2.component';
import { AccountMenuComponent } from '../../../../common/menu/account_menu.component';
import { Observable, of, forkJoin } from 'rxjs';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore'; // Import query and where
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth_service';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, CommonModule, StaticFooterV2Component, AccountMenuComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userData!: Observable<any[]>;
  accountData!: Observable<any[]>;

  constructor(private authService: AuthService, private firestore: Firestore) { }

  ngOnInit(): void {
    this.getData(); // Initialize with current month
  }

  getData(): void {
    const userId = this.authService.getUserId();

    if (!userId) {
      console.error('User ID is null');
      return;
    }

    const customerQuery = query(collection(this.firestore, 'customers'), where('ID', '==', userId));
    const accountQuery = query(collection(this.firestore, 'account'), where('ID', '==', userId));

    const customerData$ = collectionData(customerQuery, { idField: 'ID' }).pipe(map(data => of(data)));
    const accountData$ = collectionData(accountQuery, { idField: 'ID' }).pipe(map(data => of(data)));

    // Combine both observables and wait for both to complete
    forkJoin({
      customerData: customerData$,
      accountData: accountData$
    }).subscribe(data => {
      this.userData = data.customerData;
      this.accountData = data.accountData;
    });
  }
}
