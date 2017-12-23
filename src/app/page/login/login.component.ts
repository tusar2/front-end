import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {
    username: '',
    password: ''
  }

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  login(){

  this._userService.obtainAccessToken(this.loginData)


  }

  getAccessTokenByRefreshToken(){
    this._userService.obtainAccessTokenFromRefreshToken()
  }

}
