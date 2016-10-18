import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onclose() {
      this.transitionToRoute('companies.index');
    }
  }
});
