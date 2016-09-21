import { Component } from '@angular/core';
import counter from './store/counter';

@Component({
  selector: 'my-app', // <my-app></my-app>
  template: `
    <router-outlet></router-outlet>
    <button (click)="counter.increment()">Increment</button>
    <button (click)="counter.decrement()">Decrement</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = counter;
}
