import Route from '@ember/routing/route';

export default Route.extend ({
  model () {
    // const courses = this.modelFor ('application').data.map (course => {
    //   return course.attributes;
    // });
    const courses = this.modelFor('application');
    console.log ('courses', courses);
    return courses;
  },
});
