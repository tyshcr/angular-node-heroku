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

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  onSubmitLoginForm() {
      console.log(this.model.email + " | " + this.model.password)
      if (this.model.email && this.model.password) {
        this.apiService
          .postLogin(this.model)
          .then((response: LoginResponse) => {
            console.log(response)
          });
      }
  }

}
