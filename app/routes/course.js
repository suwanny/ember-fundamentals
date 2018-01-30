import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const courses = this.modelFor('application');
    const model = courses[parseInt(params.id)];
    console.log('model', model);
    return model;
  }
});
