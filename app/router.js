import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list');
  this.route('add');
  this.route('movies/edit',{path:'movies/edit/:movie_id'});
  this.route('movies', function() {
    this.route('add');
  });
});

export default Router;
