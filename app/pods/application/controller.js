import Ember from 'ember';

export default Ember.Controller.extend({
  section: Ember.computed('currentPath', function() {
    return this.get('currentPath').split('.')[0];
  })
});
