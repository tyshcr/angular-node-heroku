import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() { }

  sendEmail() {
    console.log('calling sendemail' + process.env.TO_EMAIL + process.env.FROM_EMAIL)
    this.apiService.getEmail()
    window.alert("sending email")
  }

}
