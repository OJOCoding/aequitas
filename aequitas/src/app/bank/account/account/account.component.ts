import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../../common/dynamic-header/dynamic_header.component';
import { StaticFooterV2Component } from '../../../common/static-footer-v2/static_footer_v2.component';
import { AccountMenuComponent } from '../../../common/menu/account_menu.component';
import { AuthService } from '../../../services/auth_service';

@Component({
  selector: 'acccount',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component, AccountMenuComponent],
  templateUrl:'./account.component.html',
  styleUrl: './account.component.css'
})export class AccountComponent implements OnInit {
  userName: string = '';
  balance: number | null = null;

  constructor(private authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    // Retrieve the user's ID from AuthService
    const userId = this.authService.getUserId();

    if (!userId) {
        console.error('User ID is null');
        return;
    }

    // Call getUserAccountDetailsById with the retrieved userId
    try {
        const accountDetails = await this.authService.getUserAccountDetailsById(userId);
        
        if (accountDetails.length > 0) {
            // Assuming the balance is stored in the 'ac_balance' field of the first account document
            const balance: number = accountDetails[0].ac_balance;
            this.balance = balance; // Assign balance to the component property
            console.log('Account balance:', balance);
        } else {
            console.error('Account details not found');
        }
    } catch (error) {
        console.error('Error getting account details:', error);
    }
  }
}