import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/aequitas-landing/home.component';
import { CdkMenu, CdkMenuItem, CdkMenuModule, CdkMenuTrigger } from '@angular/cdk/menu';
import { AuthService } from '../../services/auth_service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dynamic-header',
  standalone: true,
  templateUrl: './dynamic_header.component.html',
  styleUrls: ['./dynamic_header.component.css'],
  imports: [
    CommonModule,
    CdkMenuModule,
    RouterModule // Import the CdkMenuModule here
  ]
})
export class DynamicHeaderComponent implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Retrieve the user's ID from AuthService
    const userId = this.authService.getUserId();

    // Call getUserDetailsById with the retrieved userId
    if (userId) {
      this.authService.getUserDetailsById(userId)
        .then(userName => {
          if (userName) {
            this.userName = userName;
          } else {
            console.error('User name not found');
          }
        })
        .catch(error => {
          console.error('Error getting user details:', error);
        });
    } else {
      console.error('User ID is null');
    }
  }

  logout(): void {
    this.authService.clearUserId(); // Call the method to clear the userID
  }
}
