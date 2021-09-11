import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../services/token.service';
import {VisitorService} from '../../services/visitor.service';
import {Donation} from '../../models/donation';
import {logger} from 'codelyzer/util/logger';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';
import {Visitor} from '../../models/visitor';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  donations: Donation[]= [];
  visitor?: Visitor;

  constructor(private  visitorService: VisitorService,
              private profileService: ProfileService,
              private router: Router) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(rese => this.setProfile(rese));
    this.getAllDonations();
    this.getUser();
  }

  getAllDonations(){
    this.visitorService.getAllDonation().subscribe((res: Donation[]) => {
      this.donations = res;
    });
  }

  setProfile(res: any){
    this.profileService.handle(res);
  }



  getUser(){
    this.visitorService.getVisitor().subscribe((res:Visitor) => {
      this.visitor = res;
      console.log(res);
    });
  }
}
