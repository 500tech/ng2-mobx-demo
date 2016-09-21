import { observable, action, computed } from 'mobx';

class Counter {
    @observable value: number = 0;
    @action increment() {
      this.value = this.value + 1;
    }
    @action decrement() {
      this.value = this.value - 1;
    }
    @computed get doubleValue() {
        return this.value * 2;
    }
}
export default new Counter();
