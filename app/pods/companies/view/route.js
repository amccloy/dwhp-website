import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    // Don't scroll to top.
  },

  model(attrs) {
    return this.modelFor('companies').findBy('id', parseInt(attrs.company_id));
  }
});
