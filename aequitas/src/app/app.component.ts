import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  template:'<main> <section class="content"><router-outlet></router-outlet></section></main>  ',
  styleUrl: './app.component.css',
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'aequitas';
}
