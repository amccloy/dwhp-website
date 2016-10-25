import Ember from 'ember';

export default Ember.Controller.extend({

  displayUrl: Ember.computed('model.url', function() {
    return this.get('model.url').replace('http://www.', '');
  }),

  actions: {
    onclose() {
      this.transitionToRoute('companies.index');
    }
  }
});
