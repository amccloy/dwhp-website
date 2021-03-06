import Ember from 'ember';
import config from './config/environment';
import resetScroll from 'dwhp/mixins/reset-scroll';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news', function() {
    this.route('index', { path: '/' }, function() {
      this.route('view', { path: ':news_id' });
    });
    this.route('newsletters');
  });

  this.route('team', function() {
    this.route('view', { path: ':team_id' });
  });

  this.route('approach', function() {
    this.route('adding-value');
    this.route('transaction-types');
    this.route('deal-process');
  });

  this.route('companies', function() {
    this.route('view', { path: ':company_id' });
  });

  this.route('contact', function() {
    this.route('toronto');
    this.route('park-city');
  });

  this.route('page-not-found', { path: '/*wildcard' });
});

Ember.Route.reopen(resetScroll);


export default Router;
