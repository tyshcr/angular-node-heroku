import { Injectable } from '@angular/core';
import { ListItem } from './types/listitem';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})

export class ListService {
  
  private listUrl = environment.apiHost + 'api/list'

  constructor(private http: HttpClient) {}

  // -- Get the entire 'list' table
  getList(): Promise<void | ListItem[]> {
    return this.http.get(this.listUrl)
               .toPromise()
               .then(response => response as ListItem[])
               .catch(null); // handle error
  }
}
