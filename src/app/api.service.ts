import { Injectable } from '@angular/core';
import { ListItem } from './types/listitem';
import { LoginResponse } from './types/loginresponse'
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private listUrl = environment.apiHost + 'api/list'
  private loginUrl = environment.apiHost + 'api/login'

  constructor(private http: HttpClient) {}

  // -- Get the entire 'list' table
  getList(): Promise<void | ListItem[]> {
    // let token = this.accessToken
    // let options = { headers: { 'Authorization': token }}
    // return this.http.get(this.listUrl, options) ...
    return this.http.get(this.listUrl)
               .toPromise()
               .then(response => response as ListItem[])
               .catch(null); // handle error
  }

  public postLogin(body: any): Promise<void | LoginResponse> {
    console.log("loginUrl: " + this.loginUrl)
    // let body = new HttpParams() // not needed when 'body' is a function parameter
    // body = body.set('client_id', env.client_id) // you can manipulate 'body' like this
    // body = body.set('client_secret', env.client_secret)
    return this.http.post(this.loginUrl, body)
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
