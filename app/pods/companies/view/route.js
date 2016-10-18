import Ember from 'ember';

export default Ember.Route.extend({
  model(attrs) {
    return this.modelFor('companies').findBy('id', parseInt(attrs.company_id));
  }
});
