import Ember from 'ember';

export default Ember.Mixin.create({
  activate() {
    this._super();
    
    if ($('.app-background')[0]) {
      $('.app-background')[0].scrollTop = 0;
    }
  }
});
