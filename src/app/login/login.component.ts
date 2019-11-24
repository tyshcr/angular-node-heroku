import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ApiService } from '../api.service'
import { AuthService } from '../auth.service'

import { LoginResponse } from '../types/loginresponse'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {}
  loginAlert: boolean = false
  showLogin: boolean = true

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  switchDisplay() {
    this.model = {}
    this.showLogin = !this.showLogin
  }

  forgotPassword() {
    window.location.href = "./forgotpassword"
  }

  onSubmitLoginForm() {
      this.loginAlert = false
      console.log(this.model.email + " | " + this.model.password)
      if (this.model.email && this.model.password) {
        this.apiService
          .postLogin(this.model)
          .then((response: LoginResponse) => {
            console.log(response)
            if (response.success && response.token) {
              this.authService.setToken(response.token)
              window.location.href = "./homepage"
            } else {
              this.loginAlert = true
              console.log('then login alert '+ this.loginAlert)
            }
          }).catch((error) => {
            this.loginAlert = true
            console.log('catch login alert '+ this.loginAlert)
          });
      } else {
        this.loginAlert = true
      }
  }

}
