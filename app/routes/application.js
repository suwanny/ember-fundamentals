import Route from '@ember/routing/route';
import ALL_COURSES from '../models/courses';

export default Route.extend({
  model() {
    return ALL_COURSES;
  }
});
