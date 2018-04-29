import { Component, OnInit } from '@angular/core';
import { User } from './authentication/services/user';


@Component({
  selector: 'oh-app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private user = new User(1004682, 'Archit Kashyap', 'archit.kashyap@yash.com', '1234', ['ROLE_EMPLOYEE','ROLE_IRM','ROLE_HR']);
}
