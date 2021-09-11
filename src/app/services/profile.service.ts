import { Injectable } from '@angular/core';
import {TokenService} from './token.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get(`${environment.apiUrl}/profile`);
  }


  set(data: any){
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('status', data.emailVerificationStatus);
    localStorage.setItem('roles', JSON.stringify(data.roles));
  }

  handle(data: any){
    this.set(data);
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  getUserName(){
    return localStorage.getItem('userName');
  }

  getStatus(){
    return localStorage.getItem('userName');
  }

  getRole(){
    return localStorage.getItem('roles');
  }


}
