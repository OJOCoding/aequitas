import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../common/dynamic_header.component';
import { StaticFooterV2Component } from '../../common/static_footer_v2.component';

@Component({
  selector: 'bill-payment',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component],
  templateUrl:'./bill_payment.component.html',
  styleUrl: './bill_payment.component.css'
})
export class BillPaymentComponent {
}
