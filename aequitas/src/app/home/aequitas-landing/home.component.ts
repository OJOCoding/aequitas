import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticHeaderComponent } from '../../common/static-header/static_header.component';
import { StaticFooterComponent } from '../../common/static-footer/static_footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, StaticHeaderComponent, StaticFooterComponent],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
