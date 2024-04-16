import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'dynamic-header',
  standalone: true,
  imports: [RouterModule,HomeComponent],
  templateUrl:'./dynamic_header.component.html',
  styleUrl: './dynamic_header.component.css'
})
export class DynamicHeaderComponent {
}
