import { computed } from '@ember/object';
import Controller from '@ember/controller';

class ApplicationController extends Controller {
  constructor() {
    super();
    this.set('x', 5);
    this.set('lValue', '');
    // this.courses = ALL_COURSES;
  }
}

let c = 0;
ApplicationController.prototype.Xsq = computed('x', {
  get() {
    console.log('calculated ', ++c, 'times');
    let x = this.get('x');
    return x * x;
  },
  set(_, newVal) {
    let x = Math.sqrt(parseFloat(newVal));
    this.set('x', x);
    return newVal;
  }
});

ApplicationController.prototype.uValue = computed('lValue', {
  get() {
    const l = this.get('lValue');
    return l.toUpperCase();
  },
  set(_, newVal) {
    this.set('lValue', newVal.toLowerCase());
    return newVal.toUpperCase();
  }
});

export default ApplicationController;
