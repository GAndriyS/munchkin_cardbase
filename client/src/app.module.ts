// Vendor
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import 'reflect-metadata';
import 'zone.js';

// APP
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
