import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let { id: slug } = params;
    // const courses = this.modelFor('application').data.map(course => {
    //   return course.attributes;
    // });

    // debugger;
    const courses = this.modelFor('application');
    return courses.filter(course => course.slug === slug)[0];
    // return this.modelFor('application').filter(
    //   course => course.title === title
    // )[0];
  }
});
