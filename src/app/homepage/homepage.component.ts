import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { AuthService } from '../auth.service';
import { ListItem } from '../types/listitem';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ ListService ]
})
export class HomepageComponent implements OnInit {

  // list: ListItem[];
  displayToken: string

  constructor(
    private authService: AuthService,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.displayToken = this.authService.getToken()
    // this.listService
    //   .getList()
    //   .then((listitems: ListItem[]) => {
    //     this.list = listitems;
    //   });
  }

}
