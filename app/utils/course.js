import EmberObject from '@ember/object'

// ES6
class Course extends EmberObject {
  // get title() {
  //   return 'No Title';
  // }
  // // title:
  // description: ''
  constructor() {
    console.log('... constructor .... ');
    super();
    if (!this.title) { this.title = 'No Title'; }
    if (!this.description) { this.description = ''; }
    if (!this.tags) { this.tags = []; }
    if (!this.languages) { this.languages = []; }
  }

  init() {
    this._super(...arguments);
    console.log('... init .... ');
  }

  static languageName(abbrev) {
    switch(abbrev) {
      case 'js': return 'JavaScript';
      default: return 'Unknown';
    }
  }

  // init() {
  //   this._super(...arguments);
  //   this.set('languages', []);
  //   this.set('tags', []);
  // }
}

// ES5
// const Course = EmberObject.extend({
//   title: 'No Title',
//   description: '',
//   init: function() {
//     this._super(...arguments)
//     this.set('languages', []);
//     this.set('tags', []);
//   },
// });

// Course.reopenClass({
//   languageName(abbrev) {
//     switch(abbrev) {
//       case 'js': return 'JavaScript';
//       default: return 'Unknown';
//     }
//   }
// });

export default Course;
