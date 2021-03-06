import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    questions: this.store.findAll('question'),
    reviews: this.store.findAll('review')
    // review means answers
  });
},

  actions: {
      saveQuestion3(params) {
       var newQuestion = this.store.createRecord('question', params);
       newQuestion.save();
       this.transitionTo('index');
     },
     saveReview(params) {
     var newReview = this.store.createRecord('review', params);
     newReview.save();
     this.transitionTo('index');
   }


   }
});
