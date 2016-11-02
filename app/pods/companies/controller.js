  import Ember from 'ember';

  export default Ember.Controller.extend({
    current: Ember.computed('model.[]', function() {
      return this.get('model').filterBy('type', 'current').sortBy('name');
    }),

    past: Ember.computed('model.[]', function() {
      return this.get('model').filterBy('type', 'past').sortBy('name');
    })
  });
