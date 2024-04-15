import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticFooterComponent } from '../common/static_footer.component';
import { StaticHeaderComponent } from '../common/static_header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,StaticHeaderComponent,StaticFooterComponent],
  templateUrl:'./web_font.component.html',
  styleUrl: './web_font.component.css'
})
export class WebFontComponent {

}
