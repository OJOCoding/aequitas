import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../common/dynamic_header.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';
import { AccountMenuComponent } from '../../common/account_menu.component';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component,AccountMenuComponent],
  templateUrl:'./profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
}
