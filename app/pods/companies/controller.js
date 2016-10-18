  import Ember from 'ember';

  export default Ember.Controller.extend({
    current: Ember.computed('model.[]', function() {
      return this.get('model').filterBy('type', 'current');
    }),

    past: Ember.computed('model.[]', function() {
      return this.get('model').filterBy('type', 'past');
    })
  });
