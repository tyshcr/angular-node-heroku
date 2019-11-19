import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service'
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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  switchDisplay() {
    this.showLogin = !this.showLogin
  }

  onSubmitLoginForm() {
      this.loginAlert = false
      console.log("app ts:" + this.model.email + " | " + this.model.password)
      if (this.model.email && this.model.password) {
        this.apiService
          .postLogin(this.model)
          .then((response: LoginResponse) => {
            console.log(response)
            if (response.success && response.token) {
              window.location.href = "./homepage"
            } else {
              this.loginAlert = true
            }
          }).catch((error) => {
            this.loginAlert = true
          });
      } else {
        this.loginAlert = true
      }
  }

  // Observable
  // this.apiService.postLogin().subscribe((response:LoginResponse) => {
  //   do something with 'response'
  // },
  // err => {
  //   console.log(err)
  // })

}
