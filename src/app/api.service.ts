import { Injectable } from '@angular/core';

import { RegisterResponse } from './types/registerresponse';
import { LoginResponse } from './types/loginresponse';
import { environment } from '../environments/environment'
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private registerUrl = environment.apiHost + 'api/register'
  private loginUrl = environment.apiHost + 'api/login'

  constructor(private http: HttpClient) {}

  public postRegister(data: any): Promise<void | RegisterResponse> {
    return this.http.post(this.registerUrl, data)
    .toPromise()
    .then(response => response as RegisterResponse)
    .catch(null); // handle error
  }

  public postLogin(data: any): Promise<void | LoginResponse> {
    return this.http.post(this.loginUrl, data)
    .toPromise()
    .then(response => response as LoginResponse)
    .catch(null); // handle error
  }

  // Observable
  // postSomething() {
  //   let url = ...
  //   body = body.set('client_id', env.client_id)
  //   body = body.set('client_secret', env.client_secret)
  //   return this.http.post(url, body).pipe(map((response:CustomResponseType) => {
  //     do something
  //     return response
  //   }))
  // }

}
