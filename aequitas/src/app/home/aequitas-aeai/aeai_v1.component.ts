import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticHeaderComponent } from '../../common/static-header/static_header.component';
import { StaticFooterV2Component } from '../../common/static-footer-v2/static_footer_v2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, StaticHeaderComponent, StaticFooterV2Component],
  templateUrl:'./aeai_v1.component.html',
  styleUrl: './aeai_v1.component.css'
})
export class AEAIV1Component {
}
