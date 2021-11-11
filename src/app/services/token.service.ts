import { Injectable } from '@angular/core';
import {ProfileService} from './profile.service';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(private profileService: ProfileService) { }

  set(data: any){
    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.email);
  }

  handle(data: any){
    this.set(data);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getEmail(){
    return localStorage.getItem('email');
  }

  remove(){
    localStorage.clear();
  }

  decode(payload: any){
    return JSON.parse(atob(payload));
  }

  payload(token: any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  isValid(){
    const token = this.getToken();
    const email = this.getEmail();

    if (token){
      const payload = this.payload(token);
      if (payload){
        return email == payload.sub;
      }
    }
    return false;
  }

  getInfo(){
    const token = this.getToken();
    if(token){
      const payload = this.payload(token);
      return payload ? payload : null;
    }
    return null;
  }

  loggedIn(){
    return this.isValid();
  }

}
