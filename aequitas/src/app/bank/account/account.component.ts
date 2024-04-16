import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../common/dynamic_header.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component],
  templateUrl:'./account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
}
