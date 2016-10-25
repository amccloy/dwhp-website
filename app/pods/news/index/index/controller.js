import Ember from 'ember';

export default Ember.Controller.extend({
  news: Ember.computed('model.news.[]', function() {
    return this.get('model.news').sortBy('id').reverse();
  })
});
