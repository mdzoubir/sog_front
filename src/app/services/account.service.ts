import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private logeddIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());

  authStatus = this.logeddIn.asObservable()

  constructor(private tokenService: TokenService) { }

  changeStatus(value: boolean){
    this.logeddIn.next(value)
  }
}
