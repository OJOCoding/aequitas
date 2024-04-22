import { Component } from '@angular/core';
import { HomeComponent } from '../../home/aequitas-landing/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'static-header-v2',
  standalone: true,
  imports: [HomeComponent,RouterModule],
  templateUrl:'./static_header_v2.component.html',
  styleUrl: './static_header_v2.component.css'
})
export class StaticHeaderV2Component {
}
