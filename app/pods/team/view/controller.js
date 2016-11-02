import Ember from 'ember';

export default Ember.Controller.extend({
  sortedCurrentBoard: Ember.computed('model.currentBoard.@each.name', function() {
    return (this.get('model.currentBoard') || []).sortBy('name');
  }),

  sortedPreviousBoard: Ember.computed('model.previousBoard.@each.name', function() {
    return (this.get('model.previousBoard') || []).sortBy('name');
  })
});
