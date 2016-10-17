import Ember from 'ember';

export default Ember.Route.extend({
  model(attrs) {
    return this.modelFor('team').findBy('id', parseInt(attrs.team_id));
  }
});
