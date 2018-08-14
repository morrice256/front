import { Component, OnInit } from '@angular/core';
import { UserAuthServiceService } from '../../service/user-auth-service.service';
import { UserAuth } from '../../class/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  public user: UserAuth = new UserAuth()

  constructor(private _userAuthService: UserAuthServiceService) { }

  ngOnInit() {
  }

  auth(){
    this._userAuthService.authenticaton(this.user).subscribe((data) => {
      console.log(data);
    });
  }

}
