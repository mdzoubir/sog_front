import { Component, OnInit } from '@angular/core';
import {GirlService} from '../../services/girl.service';
import {Girl} from '../../models/girl';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  private page:number=1;
  // private girl!: Array<any>;

  constructor(private _girlService: GirlService) { }

  ngOnInit(): void {
    this.getGirls();
  }

  getGirls(){
    this._girlService.getAllGirls(this.page).subscribe(
      data=>{
        console.log(data);
        // this.girls=data['content'];
        // this.pages = new Array(data['totlaPages']);
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

}
