import { Component, ChangeDetectionStrategy } from '@angular/core';
import counter from '../store/counter';
import { observe } from '../ng2-mobx';

/*
  example using ng2-mobx @observe decorator,
  converting the observed values into an Rx stream
*/
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @observe can receive a function 
  @observe(() => counter.value) $value;

  // @observe can receive an observable and an attribute
  @observe(counter, 'doubleValue') $doubleValue;
}
