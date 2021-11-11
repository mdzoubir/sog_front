import { Component, OnInit } from '@angular/core';
import {Donation} from '../../../models/donation';
import {VisitorService} from '../../../services/visitor.service';
import {Visitor} from '../../../models/visitor';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  visitor?: Visitor;
  donations: Donation[]= [];


  updateProfile = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      // photo: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required, Validators.minLength(20)]),
    });

  constructor(private visitorService: VisitorService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllDonations();
    this.getUser();
  }


  getAllDonations(){
    this.visitorService.getAllDonation().subscribe((res: Donation[]) => {
      this.donations = res;
    });
  }

  getUser(){
    this.visitorService.getVisitor().subscribe((res:Visitor) => {
      this.visitor = res;
    });
  }

  updateVisitor(updateForm: NgForm):void {
    console.log(updateForm.value);
    this.visitorService.updateVisitor(updateForm.value).subscribe(res => console.log(res));
  }
}
