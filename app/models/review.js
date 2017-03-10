import DS from 'ember-data';

// this review means answers and content

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
});
