import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../common/dynamic_header.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';
import { AccountMenuComponent } from '../../common/account_menu.component';

@Component({
  selector: 'history',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component,AccountMenuComponent],
  templateUrl:'./history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
}
