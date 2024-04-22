import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/aequitas-landing/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  template:'<main><router-outlet></router-outlet></main>  ',
  styleUrl: './app.component.css',
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'aequitas';
}
