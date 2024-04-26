import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../../../common/dynamic-header/dynamic_header.component';
import { StaticFooterV2Component } from '../../../../common/static-footer-v2/static_footer_v2.component';
import { AccountMenuComponent } from '../../../../common/menu/account_menu.component';
import { Observable, of, forkJoin } from 'rxjs';
import { Firestore, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore'; // Import query and where
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth_service';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, CommonModule, StaticFooterV2Component, AccountMenuComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileComponent implements OnInit {
  userData: any;
  accountData: any;

  constructor(private authService: AuthService, private firestore: Firestore) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    const userId = this.authService.getUserId();

    if (!userId) {
      console.error('User ID is null');
      return;
    }

    const userQuery = query(collection(this.firestore, 'customers'), where('ID', '==', userId));
    const accountQuery = query(collection(this.firestore, 'account'), where('ID', '==', userId));

    try {
      const [userDataSnapshot, accountDataSnapshot] = await Promise.all([
        getDocs(userQuery),
        getDocs(accountQuery)
      ]);

      const userDataArray = userDataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const accountDataArray = accountDataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      this.userData = userDataArray.length > 0 ? userDataArray[0] : null; // Assuming there's only one user document
      this.accountData = accountDataArray.length > 0 ? accountDataArray[0] : null; // Assuming there's only one account document

      // Convert timestamp to human-readable date for "Open Date" if it's in ac_odate field
      if (this.accountData?.ac_odate) {
        const timestamp = new Date(this.accountData.ac_odate.seconds * 1000); // Convert seconds to milliseconds
        this.accountData.ac_odate = timestamp.toLocaleDateString(); // Format the date as per your preference
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}