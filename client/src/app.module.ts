// LESS
import './styles/main.less';

// Vendor
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'reflect-metadata';
import 'zone.js';

// APP 
import { LoginForm }  from './app/login/login-form.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    LoginForm
  ],
  bootstrap: [ LoginForm ]
})

export class AppModule {}
console.log('Entry File');
