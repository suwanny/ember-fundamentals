import Route from '@ember/routing/route';

export default Route.extend ({
  model () {
    const courses = this.modelFor ('application').data.map (course => {
      return course.attributes;
    });
    console.log ('courses', courses);
    return courses;
  },
});
