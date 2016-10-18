import Ember from 'ember';

export default Ember.Controller.extend({
  news: Ember.computed('model.[]', function() {
    return this.get('model').sortBy('id').reverse().slice(0, 3);
  })
});
