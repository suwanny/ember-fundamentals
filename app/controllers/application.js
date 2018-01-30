import Controller from '@ember/controller';
import ALL_COURSES from '../models/courses';

export default class extends Controller {
  constructor() {
    super();
    this.set('x', 5);
    this.courses = ALL_COURSES;
  }
}
