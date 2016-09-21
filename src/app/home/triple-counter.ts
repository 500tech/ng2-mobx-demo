import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import counter from '../store/counter';
import { autorun } from 'mobx';

/*
  example using mobx native function autorun,
  and trigerring change detection manually
*/
@Component({
  selector: 'my-triple-value',
  template: '<p>Triple Counter: {{ tripleValue }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripleComponent implements OnInit {
  tripleValue = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    autorun(() => {
      this.tripleValue = counter.value * 3;
      this.changeDetectorRef.markForCheck();
    });
  }
}

// import { Input, Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
// import counter from '../store/counter';
// import { connect } from '../ng2-mobx';

//   // example using mobx native function autorun,
//   // and trigerring change detection manually
// @Component({
//   selector: 'triple-counter',
//   template: '<p>Triple Counter: {{ value * 3 }}</p>',
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// class TripleComponent {
//   @Input() value;
// }

// export default connect(TripleComponent, () => ({
//   value: counter.value
// }));
