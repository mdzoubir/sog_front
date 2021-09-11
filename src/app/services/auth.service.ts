import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileService} from './profile.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private profileService: ProfileService){}

  login(date : {email: string, password: string}){
    return this.http.post("http://localhost:8080/login", date);
  }

}
