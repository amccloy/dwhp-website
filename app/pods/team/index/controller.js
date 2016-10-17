  import Ember from 'ember';

  export default Ember.Controller.extend({
    investment: Ember.computed('model.[]', function() {
      return this.get('model').filterBy('type', 'investment');
    }),

    sourcing: Ember.computed('model.[]', function() {
      return this.get('model').filterBy('type', 'sourcing');
    }),

    admin: Ember.computed('model.[]', function() {
      return this.get('model').filterBy('type', 'admin');
    })
  });
