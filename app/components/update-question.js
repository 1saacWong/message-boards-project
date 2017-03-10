import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuesitonForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
        image: this.get('image'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
