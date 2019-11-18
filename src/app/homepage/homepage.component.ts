import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ListItem } from '../types/listitem';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ ApiService ]
})
export class HomepageComponent implements OnInit {

  list: ListItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
      .getList()
      .then((listitems: ListItem[]) => {
        this.list = listitems;
      });
  }

}
