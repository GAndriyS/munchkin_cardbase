import { Component } from '@angular/core';

export class LoginData {
  login: string;
  pw: string;
}

@Component({
  selector: 'login-form',
  template: `
    Login: <input type="text"></input>
    PW: <input type="password"></input>
  `
})

export class LoginFormComponent {}