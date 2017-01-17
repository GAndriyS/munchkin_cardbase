import { Component } from '@angular/core';

@Component({
  selector: 'application',
  template: `Some Logo! And title - {{title}}`
})

export class AppComponent {
  title = 'Cardbase';
}