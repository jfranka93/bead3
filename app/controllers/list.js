import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
    removeMovie: function(id){
        this.store.findRecord('movie',id).then(function(movie){
            movie.deleteRecord();
            movie.save();
        })
    },
    removeActor: function(id){
        this.store.findRecord('actor',id).then(function(actor){
            actor.deleteRecord();
            actor.save();
        })
    }
    }
});
