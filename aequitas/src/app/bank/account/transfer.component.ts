import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../common/dynamic_header.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';

@Component({
  selector: 'transfer',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component],
  templateUrl:'./transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class MoneyTransferComponent {
}
