import Ember from 'ember';

export default Ember.Route.extend({
  model(attrs) {
    return this.modelFor('application').findBy('id', parseInt(attrs.news_id));
  }
});
