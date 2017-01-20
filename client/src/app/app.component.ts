import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'application',
  templateUrl: './templates/app.tpl.html'
})

export class AppComponent {
  user: User;
  constructor() {
    let defaultUser: User = {
      isLoggined: false,
      name: 'unknown',
      id: -1
    }
    this.user = defaultUser;
  }
  toggleLogin() {
    this.user.isLoggined = !this.user.isLoggined;
  }
}