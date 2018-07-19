import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authState: any = null;

  constructor(private router: Router, public auth: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.currentUserObservable
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          console.log("access denied");
          this.router.navigate(['/signup']);
        }
      });
  }

}
