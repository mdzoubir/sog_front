import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';
import {Donation} from '../models/donation';
import {ProfileService} from './profile.service';
import {Visitor} from '../models/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient,
              private profileService: ProfileService) { }

  getAllDonation(): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${environment.apiUrl}/api/v1/donation/all/${this.profileService.getUserId()}` );
  }

  getVisitor() : Observable<Visitor>{
    return this.http.get<Visitor>(`${environment.apiUrl}/api/v1/visitor/${this.profileService.getUserId()}`)
  }

  updateVisitor(visitor: Visitor) :Observable<Visitor>{
    return this.http.post<Visitor>(`${environment.apiUrl}/api/v1/visitor/${this.profileService.getUserId()}`, visitor);
  }
}
