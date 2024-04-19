import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'account-menu',
  standalone: true,
  imports: [RouterModule,HomeComponent],
  templateUrl:'./account_menu.component.html',
  styleUrl: './account_menu.component.css'
})
export class AccountMenuComponent {
}
