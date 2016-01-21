import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        editMovie: function(id){
            var self = this;
            var title = this.get('model.title');
            var createdate = this.get('model.createdate');

            this.store.findRecord('movie', id).then(function(movie){
                movie.set('title',title);
                movie.set('createdate',new Date(createdate));
                movie.save();
                
                self.transitionTo('list');
            });
        },
        addActor: function(id){
            var name = this.get('actorName');
            var film = this.store.findRecord('movie',id);
            var newActor = this.store.createRecord('actor',{
                name: name,
                key: id
            });
            this.store.findRecord('movie',id).then(function(movie){
                movie.get('actors').then(function(){
                    movie.get('actors').pushObject(newActor);
                    movie.save();
                });
            });
            newActor.save();
            
            this.setProperties({
               actorName: ''
            });
        }
    }
});
