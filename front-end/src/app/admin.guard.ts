import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isUserConnected() && this.userService.isUserAdmin()) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      // You can also navigate to a different route or perform any other action here
      return this.router.parseUrl('/login');
    }
  }
}
