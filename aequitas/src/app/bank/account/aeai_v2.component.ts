import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../common/dynamic_header.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';
import { AccountMenuComponent } from '../../common/account_menu.component';
@Component({
  selector: 'aeai-v2',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component, AccountMenuComponent],
  templateUrl:'./aeai_v2.component.html',
  styleUrl: './aeai_v2.component.css'
})
export class AEAIV2Component {
}
