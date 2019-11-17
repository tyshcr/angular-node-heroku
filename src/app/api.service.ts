import { Injectable } from '@angular/core';
import { LoginResponse } from './types/loginresponse';
// import { Observable } from "rxjs";
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private loginUrl = environment.apiHost + 'api/login'

  constructor(private http: HttpClient) {}

  // -- Login the user
  // postLogin(data): Promise<void | LoginResponse> {
  //   return this.http.post(this.loginUrl, data, null)
  //              .toPromise()
  //              .then(response => response as ListItem[])
  //              .catch(null); // handle error
  // }

  // postLogin(data: any): Observable<LoginResponse> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': 'my-auth-token'
  //     })
  //   };
  //
  // return this.http.post<LoginResponse>(this.loginUrl, data, httpOptions)
  //   .pipe(
  //     // console.log("error")
  //     // catchError(this.handleError('error', data))
  //   );

  public postLogin(data: any): Promise<void | LoginResponse> {
    return this.http.post(this.loginUrl, data)
    .toPromise()
    .then(response => response as LoginResponse)
    .catch(null); // handle error
  }

}
