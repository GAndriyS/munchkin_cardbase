import { Component } from '@angular/core';

export class LoginData {
  login: number;
  pw: string;
}

@Component({
  selector: 'login-form',
  template: `
    Login: <input type="text"></input>
    PW: <input type="password"></input>
  `
})

export class LoginForm {}
console.log('Component');
