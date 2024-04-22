import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/aequitas-landing/home.component';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
@Component({
  selector: 'dynamic-header',
  standalone: true,
  imports: [RouterModule,HomeComponent,CdkMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl:'./dynamic_header.component.html',
  styleUrl: './dynamic_header.component.css'
})
export class DynamicHeaderComponent {
}
