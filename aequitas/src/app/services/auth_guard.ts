import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth_service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userId = this.authService.getUserId();
    if (userId) {
      return true; // Allow access to the route if userID exists
    } else {
      this.router.navigate(['/']); // Redirect to home if userID doesn't exist
      return false;
    }
  }
}