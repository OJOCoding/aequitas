import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticHeaderV2Component } from '../../common/static_header_v2.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, StaticHeaderV2Component, StaticFooterV2Component],
  templateUrl:'./dual_auth.component.html',
  styleUrl: './dual_auth.component.css'
})
export class DualAuthenticationComponent {

}
