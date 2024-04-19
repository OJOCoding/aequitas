import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../common/dynamic_header.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';
import { AccountMenuComponent } from '../../common/account_menu.component';

@Component({
  selector: 'profile-edit',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component,AccountMenuComponent],
  templateUrl:'./profile_edit.component.html',
  styleUrl: './profile_edit.component.css'
})
export class ProfileEditComponent {
}
