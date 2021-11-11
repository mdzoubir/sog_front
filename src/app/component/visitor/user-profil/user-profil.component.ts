import { Component, OnInit } from '@angular/core';
import {VisitorService} from '../../../services/visitor.service';
import {Donation} from '../../../models/donation';
import {ProfileService} from '../../../services/profile.service';
import {Visitor} from '../../../models/visitor';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {



  donations: Donation[]= [];
  visitor?: Visitor;

  constructor(private  visitorService: VisitorService,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(rese => {
      this.setProfile(rese);
      this.getAllDonations();
      this.getUser();
    });
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
    this.visitorService.getVisitor().subscribe((res :Visitor) => {
      this.visitor = res;
    });
  }

}
