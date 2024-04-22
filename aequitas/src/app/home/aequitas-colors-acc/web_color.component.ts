import { Component } from '@angular/core';
import { StaticHeaderComponent } from '../../common/static-header/static_header.component';
import { RouterModule } from '@angular/router';
import { StaticFooterComponent } from '../../common/static-footer/static_footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StaticHeaderComponent, RouterModule, StaticFooterComponent],
  templateUrl:'./web_color.component.html',
  styleUrl: './web_color.component.css'
})
export class WebColorComponent {

}
