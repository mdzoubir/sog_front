import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor() { }

  set(data: any){
    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.email);
  }

  handle(data : any){
    this.set(data);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getEmail(){
    return localStorage.getItem('email');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  decode(payload : any){
    console.log('payload : ', payload);
    return JSON.parse(atob(payload));
  }

  payload(token : any){
    const payload = token.split('.')[1];
    console.log('payload : ', payload);
    return this.decode(payload);
  }

  isValid(){
    const token = this.getToken();
    const email = this.getEmail();

    if (token){
      const payload = this.payload(token);
      if (payload){
        return email == payload.email;
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
