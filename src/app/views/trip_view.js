import _ from 'underscore';
import Backbone from 'backbone';


const TripView = Backbone.view.extend({
  initialize: fuction() {
    this.template = _.template(Backbone.$('#tmpl-contact-card').html());
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

export default TripView;
