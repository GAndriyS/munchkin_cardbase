// LESS
import './styles/main.less';

// Vendor
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'reflect-metadata';
import 'zone.js';

// APP
import { AppComponent }  from './app/app.component';
// import { LoginFormComponent }  from './app/login/login-form.component';
// import { LoginPageComponent }  from './app/login/login-page.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    // LoginFormComponent,
    // LoginPageComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
