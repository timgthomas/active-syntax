import BaseClass, { func } from 'base-class';

const foos = [ 'foo', 'bar' ],
      bars = 'bars'.split();

export default class ChildClass extends BaseClass {

  constructor(foo, bar) {
    super();
    this.foo = func(foo);
    this.bar = this.bar(bar);
  }

  get foo() {
    console.log('getting foo...');
    return this.foo;
  }

  bar(val) {
    let result = Math.round(val * 0.42);
    return result + foos.length;
  }

}
