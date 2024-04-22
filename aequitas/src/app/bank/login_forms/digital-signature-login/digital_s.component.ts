import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticHeaderV2Component } from '../../../common/static-header-v2/static_header_v2.component';
import { StaticFooterV2Component } from '../../../common/static-footer-v2/static_footer_v2.component';

@Component({
  selector: 'digital-signature',
  standalone: true,
  imports: [RouterModule, StaticHeaderV2Component, StaticFooterV2Component],
  templateUrl:'./digital_s.component.html',
  styleUrl: './digital_s.component.css'
})
export class DigitalSignatureComponent {
}
