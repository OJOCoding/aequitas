import { Component } from '@angular/core';
import { HomeComponent } from '../../home/aequitas-landing/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'static-header',
  standalone: true,
  imports: [HomeComponent,RouterModule],
  templateUrl:'./static_header.component.html',
  styleUrl: './static_header.component.css'
})
export class StaticHeaderComponent {
}
