import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'application',
  templateUrl: './app.tpl.html'
})

export class AppComponent {
  user: User;
  constructor() {
    this.user = {
      isLoggined: false,
      name: 'unknown',
      id: -1
    };
  }

  toggleLogin() {
    this.user.isLoggined = !this.user.isLoggined;
  }
}