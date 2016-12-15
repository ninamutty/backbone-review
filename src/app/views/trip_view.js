import _ from 'underscore';
import Backbone from 'backbone';


const TripView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template(Backbone.$('#tmpl-trip-card').html());
    this.detailsTemplate = _.template(Backbone.$('#tmpl-trip-details').html());
  },

  events: {
    'click .trip-name': 'showDetails'
  },

  showDetails: function(){
    const cardDetails = this.detailsTemplate(this.model.attributes);
      this.$el.append(cardDetails);
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

export default TripView;
