import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { UserDTO } from '../../interfaces/user-dto';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isAdminPanelOpen: boolean = false

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['/login']);
  }


  isUserConnected(): boolean {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('accessToken')) {
        return true;
      }
    }
    return false

  }


  openAdminPanel() {
    this.isAdminPanelOpen = true
  }

  closeAdminPanel() {
    this.isAdminPanelOpen = false
  }



  isUserAdmin(): boolean {
    let role: any
    if (typeof window !== 'undefined') {
      role = localStorage.getItem('userRole');
      if (role === "ADMIN")
        return true
    }
    return false
  }

}
