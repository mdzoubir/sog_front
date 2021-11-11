import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Girl} from '../models/girl';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GirlService {

  constructor(private http: HttpClient) { }

  getAllGirls(page:number){
    return this.http.get(`${environment.apiUrl}/api/v1/girl/all?page=`+page);
  }
}
