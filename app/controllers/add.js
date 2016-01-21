import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addMovie: function(){
            var title = this.get('title');
            var createdate = this.get('createdate');

            var newMovie = this.store.createRecord('movie',{
            title: title,
            createdate: new Date(createdate),
            });
            
            newMovie.save();
            
            this.setProperties({
               title: '',
               createdate: ''
            });
        }
    }
});