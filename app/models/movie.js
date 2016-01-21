import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdate: DS.attr('date'),
  actors: DS.hasMany('actor', { async: true }),
  created: DS.attr('string',{
      defaultValue: function(){
          return new Date();
      }
  })
});
