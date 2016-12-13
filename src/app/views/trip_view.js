import _ from 'underscore';
import Backbone from 'backbone';


const TripView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template(Backbone.$('#tmpl-trip-card').html());
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));

    return this;
  }
});

export default TripView;
