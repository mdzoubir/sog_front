import {Component, OnInit} from '@angular/core';
import {AccountService} from './services/account.service';
import {TokenService} from './services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sog';

  currentUser: null;

  constructor(private accountService: AccountService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res => {
      this.currentUser = this.tokenService.getInfo()
    })
  }

  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/login");
  }
}
