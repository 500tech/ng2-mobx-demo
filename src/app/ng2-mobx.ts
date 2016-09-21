import { Component, ComponentFactoryResolver, ComponentRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { reaction } from 'mobx';
import { Observable } from 'rxjs';

export function observe(observed, key = undefined) {
  const fn = key ? () => observed[key] : observed;

  return function (target, propertyKey: string) {
    target[propertyKey] = getRxObservable(fn);
  }
}

export function getRxObservable(fn) {
  return Observable.create((observer) => {
    reaction(fn, (data) => observer.next(data), true);
  });  
}

// export function connect(component, mapStoresToThis) {
//   const selector = 'connected-' + Reflect.getMetadata('annotations', component)[0].selector;

//   @Component({
//     selector: selector,
//     entryComponents: [component],
//     template: '',
//   })
//   class ConnectedComponent implements AfterViewInit {

//     constructor(
//       private componentFactoryResolver: ComponentFactoryResolver,
//       private viewContainerRef: ViewContainerRef) { }

//     ngAfterViewInit() {
//       const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
//       const componentRef: ComponentRef<any>
//         = this.viewContainerRef.createComponent<any>(componentFactory, 0, this.viewContainerRef.injector);

//       reaction(mapStoresToThis, (data) => {
//         Object.assign(componentRef.instance, data);
//         componentRef.changeDetectorRef.detectChanges();
//       }, true);
//     }
//     // TODO: cancel reaction
//   }
//   return [component, ConnectedComponent];
// }
