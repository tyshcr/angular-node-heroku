import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ListItem } from '../types/listitem';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ ListService ]
})
export class HomepageComponent implements OnInit {

  list: ListItem[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService
      .getList()
      .then((listitems: ListItem[]) => {
        this.list = listitems;
      });
  }

}
