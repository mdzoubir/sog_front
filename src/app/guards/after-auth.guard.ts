import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from '../services/token.service';
import {AccountService} from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AfterAuthGuard implements CanActivate {


  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

    if (this.tokenService.loggedIn()){
      this.router.navigateByUrl("/user/profile");
      return false;
    }
    return true;
  }

}
